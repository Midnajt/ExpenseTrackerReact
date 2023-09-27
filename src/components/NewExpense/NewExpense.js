import React from "react"; //this is not required

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
