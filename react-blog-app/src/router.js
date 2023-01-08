import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/layout/ErrorPage";
import AllQuotes, { loader as quotesLoader } from "./pages/AllQuotes";
import QuoteDetail, {
  loader as quoteLoader,
  action as addCommentAction,
} from "./pages/QuoteDetail";
import NewQuote, { action as newQuoteAction } from "./pages/NewQuote";
import NoQuotesFound from "./components/quotes/NoQuotesFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="quotes" />,
      },
      {
        path: "quotes",
        element: <AllQuotes />,
        loader: quotesLoader,
      },
      {
        path: "/quotes/:quoteId",
        element: <QuoteDetail />,
        loader: quoteLoader,
        action: addCommentAction,
      },
      {
        path: "/new-quote",
        element: <NewQuote />,
        action: newQuoteAction,
      },
      {
        path: "*",
        element: <NoQuotesFound />,
      },
    ],
  },
]);

export default router;
