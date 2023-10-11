import React, { useState } from "react";
import { P } from "../../Styles";
const initialState = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};
export const EntryForm = (props) => {
  const [userInput, setUserInput] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  // Error Handling

  // Handler for resetting the state.
  const resetHandler = () => {
    setUserInput(initialState);
    props.reset();
    setErrorMessage("");
  };
  // Handler for submitting the form.
  const submitHandler = (event) => {
    event.preventDefault();
    const isUserInputFilled = Object.values(userInput).every(
      (value) => value !== ""
    );
    if (isUserInputFilled) {
      setErrorMessage("");
      props.calculateHandler(userInput);
    } else {
      setErrorMessage("Please Fill All fields");
    }
  };
  //
  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) =>
              setUserInput((prevValues) => ({
                ...prevValues,
                currentSavings: +e.target.value,
              }))
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              setUserInput((prevValues) => ({
                ...prevValues,
                yearlyContribution: +e.target.value,
              }))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) =>
              setUserInput((prevValues) => ({
                ...prevValues,
                expectedReturn: +e.target.value,
              }))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) =>
              setUserInput((prevValues) => ({
                ...prevValues,
                duration: +e.target.value,
              }))
            }
          />
        </p>
      </div>
      {errorMessage && <P color="yellow">{errorMessage}</P>}
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={submitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};
