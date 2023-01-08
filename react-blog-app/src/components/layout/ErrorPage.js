import React from "react";
import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import MainNavigation from "./MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
