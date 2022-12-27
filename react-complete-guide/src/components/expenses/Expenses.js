import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        {props.items
          .filter((item) => item.date.getFullYear().toString() === filteredYear)
          .map((expense, index) => (
            <ExpenseItem key={index} {...expense} />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
