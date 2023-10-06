import React from "react";

export const ExpenseFilter = (props) => {
  const filterHandler = (e) => {
    props.onFilterChange(e.target.value);
  };
  return (
    <div className="flex justify-between">
      <span>Filter by year</span>
      <select value={props.selectedYear} onChange={filterHandler}>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
  );
};
