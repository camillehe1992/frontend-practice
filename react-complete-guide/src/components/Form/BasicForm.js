import Input from "./Input";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const firstName = {
    id: "firstname",
    label: "First Name",
    type: "text",
    errorText: "First Name must not be empty!",
    ...useInput(isNotEmpty),
  };

  const lastName = {
    id: "lastname",
    label: "Last Name",
    type: "text",
    errorText: "Last Name must not be empty!",
    ...useInput(isNotEmpty),
  };

  const emailAddress = {
    id: "emailAddress",
    label: "E-Mail Address",
    type: "text",
    errorText: "Email Address must contain @!",
    ...useInput(isEmail),
  };

  let formIsValid = false;

  if (firstName.isValid && lastName.isValid && emailAddress.isValid) {
    formIsValid = true;
  }

  const reset = () => {
    firstName.reset();
    lastName.reset();
    emailAddress.reset();
  };

  const submit = (event) => {
    event.preventDefault();
    console.log({
      firstname: firstName.value,
      lastname: lastName.value,
      email: emailAddress.value,
    });
    reset();
  };

  return (
    <form onSubmit={submit}>
      <div className="control-group">
        <Input {...firstName} />
        <Input {...lastName} />
        <Input {...emailAddress} />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
