import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const className = props.classes ? props.classes : classes.input;
  return (
    <div
      className={`${className} ${props.classes} ${
        props.isValid ? "" : classes.invalid
      }`}
    >
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {props.hasError && <p className={classes.error}>{props.errorText}</p>}
    </div>
  );
});

export default Input;
