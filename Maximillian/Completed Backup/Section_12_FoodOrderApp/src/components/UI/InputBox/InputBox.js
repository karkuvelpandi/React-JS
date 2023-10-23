import React, { useImperativeHandle } from "react";
import classes from "./InputBox.module.css";
export const InputBox = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
