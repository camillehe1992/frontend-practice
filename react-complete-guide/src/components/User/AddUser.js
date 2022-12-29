import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState();

  const changeName = (event) => {
    setInput((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const changeAge = (event) => {
    setInput((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };
  const submit = (event) => {
    event.preventDefault();
    if (input.name.trim().length === 0 || input.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter an valid name and age (non-empty value)",
      });
      return;
    }
    if (+input.age < 0) {
      setError({
        title: "Invalid input",
        message: "Please enter an valid age",
      });
      return;
    }
    props.onSave({
      name: input.name,
      age: input.age,
      id: Math.random().toString(),
    });
    setInput({
      name: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={props.name}
            onChange={changeName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={props.age}
            onChange={changeAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
