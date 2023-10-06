import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const [isFormActive, setIsFormActive] = useState(false);
  const saveExpenseDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormActive(false);
  };
  return (
    <div
      className={`w-full bg-violet-400 rounded-md p-6 text-white ${
        !isFormActive && "text-center"
      }`}
    >
      {!isFormActive && (
        <button
          type="button"
          className="bg-violet-800 px-5 py-1 rounded-md font-bold active:bg-black"
          onClick={() => setIsFormActive(true)}
        >
          Add New Expense
        </button>
      )}
      {isFormActive && (
        <ExpenseForm
          onCancel={() => setIsFormActive(false)}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
