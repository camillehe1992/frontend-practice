import React from "react";
import { useLoaderData } from "react-router-dom";
import DeleteQuote from "../components/quotes/DeleteQuote";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import { getSingleQuote, addComment, getAllComments } from "../lib/api";

const QuoteDetail = () => {
  const { quote, comments } = useLoaderData();
  return (
    <>
      <DeleteQuote quoteId={quote.id} comments={comments} />
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Comments quoteId={quote.id} comments={comments} />
    </>
  );
};

export const loader = async ({ params }) => {
  return {
    quote: await getSingleQuote(params.quoteId),
    comments: await getAllComments(params.quoteId),
  };
};

export const action = async ({ params, request }) => {
  const formData = await request.formData();
  await addComment({
    text: formData.get("comment-text"),
    quoteId: params.quoteId,
  });
  return null;
};

export default QuoteDetail;
