import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
// import Form from "./components/Form/Form";
// import Counter from "./components/Counter/Counter";
// import MoviesHome from "./components/Movies/MoviesHome";
// import UserHome from "./components/User/UserHome";
// import CourseGoal from "./components/CourseGoals/CourseGoal";
// import ExpensesHome from "./components/Expenses/ExpensesHome";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import AuthContext from "./store/auth-context";

// import Counter from "./components/Redux-Demo/Counter";
import Header from "./components/Redux-Demo/Header";
import Auth from "./components/Redux-Demo/Auth";
import UserProfile from "./components/Redux-Demo/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
    </>
  );
}

export default App;
