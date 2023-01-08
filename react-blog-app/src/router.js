import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes, { loader as quotesLoader } from "./pages/AllQuotes";
import QuoteDetail, {
  loader as quoteLoader,
  action as addCommentAction,
} from "./pages/QuoteDetail";
import NewQuote, { action as newQuoteAction } from "./pages/NewQuote";
import ErrorPage from "./components/layout/ErrorPage";
import NotFoundPage from "./components/layout/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="quotes" />,
      },
      {
        path: "quotes",
        children: [
          {
            index: true,
            element: <AllQuotes />,
            loader: quotesLoader,
          },
          {
            path: ":quoteId",
            element: <QuoteDetail />,
            loader: quoteLoader,
            action: addCommentAction,
          },
        ],
      },
      {
        path: "new-quote",
        element: <NewQuote />,
        action: newQuoteAction,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
