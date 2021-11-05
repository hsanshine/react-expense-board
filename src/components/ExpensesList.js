import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const items = props.expenses.map((item) => {
    return (
      <ExpenseItem
        date={item.date}
        commodity={item.commodity}
        price={item.price}
      />
    );
  });

  //const items = ["hamza", " kyamanywa"];
  return <div className="card">{items}</div>;
};

export default ExpensesList;
