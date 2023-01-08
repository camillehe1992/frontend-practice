import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/layout/ErrorPage";
import AllQuotes, { loader as quotesLoader } from "./pages/AllQuotes";
import QuoteDetail, {
  loader as quoteLoader,
  action as addCommentAction,
} from "./pages/QuoteDetail";
import NewQuote, { action as newQuoteAction } from "./pages/NewQuote";
import NoQuotesFound from "./components/quotes/NoQuotesFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Navigate to="quotes" />} />
      <Route path="quotes" element={<AllQuotes />} loader={quotesLoader} />
      <Route
        path="quotes/:quoteId"
        element={<QuoteDetail />}
        loader={quoteLoader}
        action={addCommentAction}
      />
      <Route path="new-quote" element={<NewQuote />} action={newQuoteAction} />
      <Route path="*" element={<NoQuotesFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
