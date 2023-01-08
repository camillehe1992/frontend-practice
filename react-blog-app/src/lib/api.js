const API_URL = "http://localhost:1337/parse";
const headers = {
  "X-Parse-Application-Id": "APPLICATION_ID",
  "Content-Type": "application/json",
};

export async function getAllQuotes() {
  const response = await fetch(`${API_URL}/classes/quotes`, { headers });
  const { results: data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data.map((comment) => {
    return {
      id: comment.objectId,
      ...comment,
    };
  });
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${API_URL}/classes/quotes/${quoteId}`, {
    headers,
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  return {
    id: quoteId,
    ...data,
  };
}

export async function addQuote(quoteData) {
  const response = await fetch(`${API_URL}/classes/quotes`, {
    headers,
    method: "POST",
    body: JSON.stringify(quoteData),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }
  return data;
}

export async function updateQuote(quoteId, updatedQuote) {
  const response = await fetch(`${API_URL}/classes/quotes/${quoteId}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(updatedQuote),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update quote.");
  }
  return null;
}

export async function deleteQuote({ quoteId, comments }) {
  // delete all comments for a sepcific quote
  await deleteCommentForQuote(comments);
  // delete a specific quote
  const response = await fetch(`${API_URL}/classes/quotes/${quoteId}`, {
    headers,
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete quote.");
  }
  return null;
}

export async function addComment(commentData) {
  const response = await fetch(`${API_URL}/classes/comments`, {
    headers,
    method: "POST",
    body: JSON.stringify(commentData),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${API_URL}/classes/comments`, { headers });

  const { results: data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  return data
    .map((comment) => {
      return {
        id: comment.objectId,
        ...comment,
      };
    })
    .filter((commit) => commit.quoteId === quoteId)
    .sort((commentA, commentB) =>
      new Date(commentA.createdAt) < new Date(commentB.createdAt) ? 1 : -1
    );
}

export async function deleteCommentForQuote(comments) {
  const requests = comments.map((comment) => {
    return {
      method: "DELETE",
      path: `/parse/classes/comments/${comment.id}`,
    };
  });
  const response = await fetch(`${API_URL}/batch`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      requests,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete commnets.");
  }
  return null;
}
