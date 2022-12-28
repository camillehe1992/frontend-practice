import { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditing = () => {
    setEditing(true);
  };
  const stopEditing = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!editing && (
        <button type="submit" onClick={startEditing}>
          Add New Expense
        </button>
      )}
      {editing && (
        <ExpenseForm onCancel={stopEditing} onSave={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
