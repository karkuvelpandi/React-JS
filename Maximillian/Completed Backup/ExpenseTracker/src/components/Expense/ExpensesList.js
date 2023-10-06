import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = (props) => {
  if (props.items.length === 0) return <p>Empty list</p>;
  return (
    <ul>
      {props.items &&
        props.items.map((expense, index) => {
          return <ExpenseItem expense={expense} key={expense.id} />;
        })}
    </ul>
  );
};
