import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpendseItem.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const content = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019, 2021 $ 2022";
  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 $ 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019, 2021 $ 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 $ 2022";
  } else {
    filterInfoText = "2019, 2020 $ 2021";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>{filterInfoText} is hidden.</p>
        {content.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
