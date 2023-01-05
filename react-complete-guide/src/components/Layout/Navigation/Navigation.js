import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={classes.nav}>
      <ul>
        {props.tabs.map((tab) => (
          <li key={tab.link}>
            <NavLink activeClassName={classes.active} to={tab.link}>
              {tab.page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
