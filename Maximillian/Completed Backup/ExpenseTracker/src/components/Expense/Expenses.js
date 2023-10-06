import React, { useState } from "react";
import { Container } from "../UI/Container";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
export const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  const filteredExpense = props.expenses.filter(
    (item) => new Date(item.date).getFullYear() === Number(filterYear)
  );

  return (
    <>
      <Container>
        <ExpenseFilter
          selectedYear={filterYear}
          onFilterChange={(year) => setFilterYear(year)}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Container>
    </>
  );
};
