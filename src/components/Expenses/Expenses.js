import "./Expenses.css";
import ExpenseItem from "./ExpendseItem.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const content = props.expenses;
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
