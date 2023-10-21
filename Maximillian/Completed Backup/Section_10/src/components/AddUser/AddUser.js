import React, { useRef, useState } from "react";
import { Container } from "../UI/Container";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = (props) => {
  const nameInputRef = useRef();
  const [userInput, setUserInput] = useState({
    name: "",
    age: 0,
  });
  const [error, setError] = useState("");

  //   Function responsible for validate and submit the user details
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    const isUserInputFilled = Object.values(userInput).every(
      (value) => value !== ""
    );
    if (isUserInputFilled && userInput.age < 1) {
      setError("Please enter positive age");
    } else if (isUserInputFilled && userInput.age > 0) {
      props.onSubmit(userInput);
      console.log("Submitting");
      setError("");
    } else {
      setError("Please enter fields");
    }
  };
  return (
    <Container>
      <form onSubmit={submitHandler} className="space-y-5 w-full">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input
            ref={nameInputRef}
            className="h-8 rounded-md text-black px-2"
            type="text"
            onChange={(e) =>
              setUserInput((prevValues) => ({
                ...prevValues,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Age (Years)</label>
          <input
            className="h-8 rounded-md text-black px-2"
            type="number"
            onChange={(e) =>
              setUserInput((prevValues) => ({
                ...prevValues,
                age: +e.target.value,
              }))
            }
          />
        </div>
        <Button className="px-3 py-1 rounded-md" type="submit">
          Add User
        </Button>
      </form>
      {error && (
        <ErrorModal message={error} onBackdropClick={() => setError("")} />
      )}
    </Container>
  );
};
