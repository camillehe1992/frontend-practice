import React from "react";
import { redirect, useActionData, useNavigation } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";

function NewQuote() {
  const data = useActionData();
  const navigation = useNavigation();
  return (
    <>
      {data && data.error && <p>data.message</p>}
      <QuoteForm submitting={navigation.state === "submitting"} />
    </>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const quote = {
    author: formData.get("author"),
    text: formData.get("quote-text"),
  };
  try {
    const res = await addQuote(quote);
    return redirect(`/quotes/${res?.objectId}`);
  } catch (error) {
    throw error;
  }
};

export default NewQuote;
