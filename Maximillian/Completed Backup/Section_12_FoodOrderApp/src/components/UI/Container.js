import React from "react";
import classes from "./Container.module.css";
export const Container = (props) => {
  return (
    <div
      className={`${classes.container} ${props.className && props.className}`}
    >
      {props.children}
    </div>
  );
};
