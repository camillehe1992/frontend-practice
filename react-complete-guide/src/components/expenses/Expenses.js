import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
