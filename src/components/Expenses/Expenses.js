import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpendseItem.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const content = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredContenet = content.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredContenet.map((expense) => {
          return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
