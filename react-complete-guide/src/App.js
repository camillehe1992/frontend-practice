import React, { useContext } from "react";
import "./App.css";
// import UserHome from "./components/User/UserHome";
// import CourseGoal from "./components/CourseGoals/CourseGoal";
// import ExpensesHome from "./components/Expenses/ExpensesHome";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
