import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

import Header from "./components/Layout/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Layout/Main/Main";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      <main>
        {!isAuth && <Login />}
        {isAuth && <Home />}
      </main>
    </>
  );
}

export default App;
