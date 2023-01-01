import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const changeName = (event) => {
    setEnteredName(event.target.value);
  };

  const blurName = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      return;
    }
  };

  const submit = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={submit}>
      <div className={`form-control ${enteredNameIsInvalid ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={changeName}
          onBlur={blurName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
