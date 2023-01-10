const API_URL = "http://localhost:1337/parse";
const HEADERS = {
  "X-Parse-Application-Id": "APPLICATION_ID",
  "Content-Type": "application/json",
};

export const createMeetup = async (meetup) => {
  const response = await fetch(`${API_URL}/classes/meetups`, {
    headers: HEADERS,
    method: "POST",
    body: JSON.stringify(meetup),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create meetup.");
  }
  console.log("Meetup created!");
  console.log(data);
  return data;
};

export const listMeetups = async () => {
  const response = await fetch(`${API_URL}/classes/meetups`, {
    headers: HEADERS,
    method: "GET",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not list all meetups.");
  }
  console.log("Retrieved all meetups!");
  return data.results.map((meetup) => {
    return {
      id: meetup.objectId,
      ...meetup,
    };
  });
};

export const getMeetup = async ({ meetupId }) => {
  const response = await fetch(`${API_URL}/classes/meetups/${meetupId}`, {
    headers: HEADERS,
    method: "GET",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get a specific meetup.");
  }
  console.log("Retrieved meetup!");
  return { id: data.objectId, ...data };
};
