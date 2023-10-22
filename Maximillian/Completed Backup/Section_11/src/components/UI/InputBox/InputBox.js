import React, { useRef, useImperativeHandle } from "react";
import Classes from "./input.module.css";
// React.forward ref method always return component so there is no change in using InputBox component
export const InputBox = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
      value: Classes.control,
    };
  });
  return (
    <div
      className={`${Classes.control} 
      ${props.isValid === false ? Classes.invalid : ""} 
      ${props.className}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
