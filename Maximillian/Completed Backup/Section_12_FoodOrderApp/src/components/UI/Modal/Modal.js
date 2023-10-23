import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { Container } from "../Container";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backDrop} onClick={props.onBackDropClick} />
      <div className={classes.modal}>{props.children}</div>
    </Fragment>,
    document.getElementById("modal-root")
  );
};

export default Modal;
