import classes from "./Card.module.css";
import Card from "../UI/Card";
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card className={classes.card}>{counter}</Card>;
};

export default ForwardCounter;
