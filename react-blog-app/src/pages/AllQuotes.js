import React from "react";
import { useLoaderData } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";

function AllQuotes() {
  const loadedQuotes = useLoaderData();
  return <QuoteList quotes={loadedQuotes}></QuoteList>;
}

export const loader = () => getAllQuotes();
export default AllQuotes;
