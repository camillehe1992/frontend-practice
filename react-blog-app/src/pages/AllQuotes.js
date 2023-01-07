import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Jone", text: "Learning React is great!" },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
}

export default AllQuotes;
