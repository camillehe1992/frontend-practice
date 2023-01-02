import { useDispatch } from "react-redux";

import classes from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { authActions } from "../../store/auth";
import useInput from "../../hooks/use-input";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

const Login = (props) => {
  const emailInput = useInput(isEmail);
  const passwordInput = useInput(isNotEmpty);
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(
      authActions.login({
        email: emailInput.value,
        password: passwordInput.value,
      })
    );
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submit}>
        <Input label="E-Mail" id="email" type="email" {...emailInput}></Input>
        <Input
          label="Password"
          id="password"
          type="password"
          {...passwordInput}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
