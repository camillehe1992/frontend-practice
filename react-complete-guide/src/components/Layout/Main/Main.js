import React from "react";
import { Route, Switch } from "react-router-dom";
import Card from "../../UI/Card";
import Navigation from "../Navigation/Navigation";
import classes from "./Main.module.css";

import Welcome from "../../../components/Router-Demo/Welcome";
import Products from "../../../components/Router-Demo/Products";
import Shop from "../../../components/Shop/Shop";
import Counter from "../../../components/Counter/Counter";
import MoviesHome from "../../../components/Movies/MoviesHome";
import UserHome from "../../../components/User/UserHome";
import CourseGoal from "../../../components/CourseGoals/CourseGoal";
import ExpensesHome from "../../../components/Expenses/ExpensesHome";

const Home = () => {
  const views = [
    { link: "/", page: "Welcome" },
    { link: "/products", page: "Products" },
    { link: "/shop", page: "Shop" },
    { link: "/counter", page: "Counter" },
    { link: "/movies-home", page: "MoviesHome" },
    { link: "/user-home", page: "UserHome" },
    { link: "/course-goal", page: "CourseGoal" },
    { link: "/expenses-home", page: "ExpensesHome" },
  ];

  return (
    <>
      <Navigation tabs={views} />
      <Switch>
        <Card className={classes.content}>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/counter" exact>
            <Counter />
          </Route>
          <Route path="/movies-home" exact>
            <MoviesHome />
          </Route>
          <Route path="/user-home" exact>
            <UserHome />
          </Route>
          <Route path="/course-goal" exact>
            <CourseGoal />
          </Route>
          <Route path="/expenses-home" exact>
            <ExpensesHome />
          </Route>
        </Card>
      </Switch>
    </>
  );
};

export default Home;
