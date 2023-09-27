import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //useState() narzedzie do robienia state'ow
  //setTitle funkcja do zmiany zmiennej/state'u
  //titile zmienna
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Chane title</button>
    </Card>
  );
}

export default ExpenseItem;