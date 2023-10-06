import React from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";

export const ExpenseItem = (props) => {
  const date = props.expense.date;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <li>
      <Card>
        <ExpenseDate date={{ month, day, year }} />
        <div className="flex flex-1 justify-between items-center ml-2">
          <h2>{props.expense.title}</h2>
          <div className=" bg-violet-600 text-white p-3 rounded-md border-2 border-white">
            ${props.expense.amount}
          </div>
        </div>
      </Card>
    </li>
  );
};
