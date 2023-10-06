import React, { useState } from "react";
import { NewExpense } from "./components/CreateExpense/NewExpense";
import { Expenses } from "./components/Expense/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Education",
    amount: "58",
    date: new Date("2019-03-03"),
  },
  {
    id: 2,
    title: "Insurance",
    amount: "18",
    date: new Date("2019-02-03"),
  },
  {
    id: 3,
    title: "Grocery",
    amount: "28",
    date: new Date("2019-08-03"),
  },
  {
    id: 4,
    title: "Grocery",
    amount: "28",
    date: new Date("2020-08-03"),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <main className="w-[95%] my-2 sm:w-[80%] mx-auto flex flex-col justify-center items-center gap-3">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </main>
  );
};

export default App;
