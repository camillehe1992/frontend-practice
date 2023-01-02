import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import Input from "../UI/Input";

const isNotEmpty = (value) => value.trim() !== "";
const isPostal = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInput = useInput(isNotEmpty);
  const streetInput = useInput(isNotEmpty);
  const postalInput = useInput(isPostal);
  const cityInput = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    nameInput.isValid &&
    streetInput.isValid &&
    postalInput.isValid &&
    cityInput.isValid
  ) {
    formIsValid = true;
  }

  const confirm = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: nameInput.value,
      street: streetInput.value,
      postal: postalInput.value,
      city: cityInput.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirm}>
      <Input
        classes={classes.control}
        label="Your Name"
        input={{
          id: "name",
          type: "text",
          style: {
            width: "20rem",
          },
          ...nameInput,
        }}
        isValid={nameInput.isValid}
        hasError={nameInput.hasError}
        errorText="Please enter a valid name"
      />
      <Input
        classes={classes.control}
        label="Street"
        input={{
          id: "street",
          type: "text",
          style: {
            width: "20rem",
          },
          ...streetInput,
        }}
        isValid={streetInput.isValid}
        hasError={streetInput.hasError}
        errorText="Please enter a valid street"
      />
      <Input
        classes={classes.control}
        label="Postal Code"
        input={{
          id: "postalCode",
          type: "text",
          style: {
            width: "20rem",
          },
          ...postalInput,
        }}
        isValid={postalInput.isValid}
        hasError={postalInput.hasError}
        errorText="Please enter a valid postal code (5 characters long)!"
      />
      <Input
        classes={classes.control}
        label="City"
        input={{
          id: "city",
          type: "text",
          style: {
            width: "20rem",
          },
          ...cityInput,
        }}
        isValid={cityInput.isValid}
        hasError={cityInput.hasError}
        errorText="Please enter a valid city"
      />
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
