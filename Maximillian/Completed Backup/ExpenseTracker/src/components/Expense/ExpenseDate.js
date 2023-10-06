import React from "react";

export const ExpenseDate = (props) => {
  return (
    <div className="flex items-center flex-col py-3 px-5 bg-fuchsia-400 border-black border-[2px] rounded-md font-bold w-24">
      <div>{props.date.month}</div>
      <div>{props.date.year}</div>
      <div className="text-2xl">{props.date.day}</div>
    </div>
  );
};
