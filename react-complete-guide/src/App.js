import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/NewExpense";

import expensesData from "./components/expenses/expenses.json";

const App = () => {
  const [expenses, setExpenses] = useState(
    expensesData.map((item) => {
      return {
        ...item,
        date: new Date(item.date),
      };
    })
  );

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    setExpenses(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
