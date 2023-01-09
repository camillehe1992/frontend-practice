const API_URL = "http://localhost:1337/parse";
const headers = {
  "X-Parse-Application-Id": "APPLICATION_ID",
  "X-Parse-Revocable-Session": "1",
  "Content-Type": "application/json",
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/login`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  });

  const data = await response.json();

  console.log("Login succeed!");
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not login.");
  }
  return data;
};

export const signup = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/users`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      username: email,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();

  console.log("Signup succeed!");
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not signup.");
  }
  return data;
};

export const resetPassword = async ({ userId, token, newPassword }) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    headers: {
      ...headers,
      "X-Parse-Session-Token": token,
    },
    method: "PUT",
    body: JSON.stringify({
      password: newPassword,
    }),
  });

  const data = await response.json();

  console.log("Password reset succeed!");
  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Could not reset passowrd.");
  }

  return data;
};
