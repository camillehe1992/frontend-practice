import classes from "./Card.module.css";
import Card from "../UI/Card";
import useCounter from "../../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card className={classes.card}>{counter}</Card>;
};

export default BackwardCounter;
