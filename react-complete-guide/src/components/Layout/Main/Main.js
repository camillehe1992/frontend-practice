import React, { useState } from "react";

import Card from "../../UI/Card";
import Navigation from "../Navigation/Navigation";
import classes from "./Main.module.css";

import Counter from "../../../components/Counter/Counter";
import MoviesHome from "../../../components/Movies/MoviesHome";
import UserHome from "../../../components/User/UserHome";
import CourseGoal from "../../../components/CourseGoals/CourseGoal";
import ExpensesHome from "../../../components/Expenses/ExpensesHome";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Counter");
  const views = [
    "Counter",
    "MoviesHome",
    "UserHome",
    "CourseGoal",
    "ExpensesHome",
  ];
  const changeTab = (event) => {
    event.preventDefault();
    setActiveTab(event.target.value);
  };

  let viewContent = <Counter />;
  switch (activeTab) {
    case "MoviesHome":
      viewContent = <MoviesHome />;
      break;
    case "UserHome":
      viewContent = <UserHome />;
      break;
    case "CourseGoal":
      viewContent = <CourseGoal />;
      break;
    case "ExpensesHome":
      viewContent = <ExpensesHome />;
      break;
    default:
      viewContent = <Counter />;
      break;
  }

  return (
    <>
      <Navigation tabs={views} onClick={changeTab} />
      <Card className={classes.content}>
        <h1>Welcome back! View {activeTab}</h1>
        {viewContent}
      </Card>
    </>
  );
};

export default Home;
