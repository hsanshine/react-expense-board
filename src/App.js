import "./App.css";
import ExpensesList from "./components/ExpensesList";

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(2020, 11, 25),
      commodity: "Fridge",
      price: 100,
    },
    {
      id: 2,
      date: new Date(2021, 3, 21),
      commodity: "Car",
      price: 1000,
    },
    {
      id: 3,
      date: new Date(2021, 10, 30),
      commodity: "House",
      price: 40000,
    },
    {
      id: 4,
      date: new Date(2021, 10, 29),
      commodity: "Skate Board",
      price: 50,
    },
  ];
  return (
    <div>
      <h1>start here!</h1>
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
