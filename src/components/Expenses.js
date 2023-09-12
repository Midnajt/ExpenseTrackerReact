import ExpenseItem from "./ExpendseItem.js";

function Expenses(props) {
  const content = props.expenses;
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
