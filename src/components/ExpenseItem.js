import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.getMonth();
  const year = props.date.getFullYear();
  const day = props.date.getDate();
  return (
    <div className="expense-item">
      <div className="calendar">
        <div className="date__month">{month}</div>

        <div className="date__year">{year}</div>
        <div className="date__day">{day}</div>
      </div>

      <div className="commodity">{props.commodity}</div>
      <div className="price">${props.price}</div>
    </div>
  );
};

export default ExpenseItem;
