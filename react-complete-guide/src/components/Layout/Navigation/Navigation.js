import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={classes.nav}>
      <ul>
        {props.tabs.map((tab) => (
          <li key={tab}>
            <button onClick={props.onClick} value={tab}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
