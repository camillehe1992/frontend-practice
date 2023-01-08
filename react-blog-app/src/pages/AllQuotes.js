import React from "react";
import { useLoaderData } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";

function AllQuotes() {
  const loadedQuotes = useLoaderData();
  return (
    <>
      {loadedQuotes && loadedQuotes.length === 0 && <NoQuotesFound />}
      {loadedQuotes.length > 0 && <QuoteList quotes={loadedQuotes}></QuoteList>}
    </>
  );
}

export const loader = () => getAllQuotes();
export default AllQuotes;
