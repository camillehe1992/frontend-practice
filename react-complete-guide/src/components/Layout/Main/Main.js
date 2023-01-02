import React from "react";

import Card from "../../UI/Card";
// import Navigation from "../Navigation/Navigation";
import classes from "./Main.module.css";

// import Form from "./components/Form/Form";
// import Counter from "./components/Counter/Counter";
// import MoviesHome from "./components/Movies/MoviesHome";
// import UserHome from "./components/User/UserHome";
// import CourseGoal from "./components/CourseGoals/CourseGoal";
// import ExpensesHome from "./components/Expenses/ExpensesHome";

const Home = () => {
  return (
    <>
      <Card className={classes.content}>
        <h1>Welcome back!</h1>
      </Card>
    </>
  );
};

export default Home;
