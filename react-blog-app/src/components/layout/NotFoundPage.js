import React from "react";
import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import MainNavigation from "./MainNavigation";

function NotFoundPage() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <h1>Page Not Found</h1>
        <p>{error}</p>
      </main>
    </>
  );
}

export default NotFoundPage;
