import React, { useState } from "react";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  // const titleChangeHandler = (event) => {
  //   // setTitle(event.target.value);.
  //   // setUserInput((prevState)=>({
  //   //   ...prevState,
  //   //   title: event.target.value,
  //   // }));
  //   setTitle(event.target.value);
  // };
  // const amountChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   amount: event.target.value,
  //   // });
  //   setAmount(event.target.value);
  // };
  // const dateHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   date: event.target.value,
  //   // });
  //   setDate(event.target.value);
  // };

  const inputChangeHandler = (context, value) => {
    if (context === "title") {
      setTitle(value);
    } else if (context === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler} className="w-full space-y-4">
      <div className="flex flex-row flex-wrap w-full">
        <div className="w-1/2 flex flex-col px-[5%]">
          <label>Title</label>
          <input
            className="text-black px-2 h-8 rounded-md focus:outline-none"
            type="text"
            onChange={(e) => inputChangeHandler("title", e.target.value)}
            value={title}
          />
        </div>
        <div className="w-1/2 flex flex-col px-[5%]">
          <label>Amount</label>
          <input
            className="text-black px-2 h-8 rounded-md focus:outline-none"
            type="text"
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
            value={amount}
          />
        </div>
        <div className="w-1/2 flex flex-col px-[5%]">
          <label>Date</label>
          <input
            className="text-black px-2 h-8 rounded-md focus:outline-none"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={(e) => inputChangeHandler("date", e.target.value)}
            value={date}
          />
        </div>
      </div>
      <div className="flex justify-center sm:justify-end gap-2">
        <button
          type="button"
          className=" bg-violet-800 px-5 py-1 rounded-md font-bold active:bg-black"
          onClick={() => props.onCancel()}
        >
          Cancel
        </button>
        <button
          className="sm:mr-5 bg-violet-800 px-5 py-1 rounded-md font-bold active:bg-black"
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};
