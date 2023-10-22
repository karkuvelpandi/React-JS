import React, { useState, useEffect, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { InputBox } from "../UI/InputBox/InputBox";

const initialState = {
  email: "",
  isEmailValid: null,
  password: "",
  isPasswordValid: null,
};
const inputReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      ...state,
      email: action.payload,
      isEmailValid: action.payload.includes("@"),
    };
  }
  if (action.type === "EMAIL_BLUR") {
    return {
      ...state,
      isEmailValid: state.email.includes("@"),
    };
  }
  if (action.type === "PASSWORD_INPUT") {
    return {
      ...state,
      password: action.payload,
      isPasswordValid: action.payload.trim().length > 6,
    };
  }
  if (action.type === "PASSWORD_BLUR") {
    return {
      ...state,
      isPasswordValid: state.password.trim().length > 6,
    };
  }
};

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatchInput] = useReducer(inputReducer, initialState);
  // Debouncing Example
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Validation Happened...");
      setFormIsValid(state.isEmailValid && state.isPasswordValid);
    }, [500]);
    return () => {
      console.log("Clean Up..");
      clearTimeout(identifier);
    };
  }, [state]);

  const emailChangeHandler = (event) => {
    dispatchInput({ type: "EMAIL_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchInput({ type: "PASSWORD_INPUT", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchInput({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchInput({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(state.email, state.password);
    } else if (!state.isEmailValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
    console.log(emailRef.current.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${
            state.isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        <InputBox
          ref={emailRef}
          label="E-Mail"
          type="email"
          id="email"
          // className={classes.control}
          isValid={state.isEmailValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          value={state.email}
        />
        <InputBox
          ref={passwordRef}
          label="Password"
          // className={classes.control}
          isValid={state.isPasswordValid}
          type="password"
          id="password"
          value={state.password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {/* <div
          className={`${classes.control} ${
            state.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
