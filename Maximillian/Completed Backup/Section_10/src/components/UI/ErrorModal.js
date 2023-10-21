import React from "react";
import { Container } from "./Container";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return (
    <section className="fixed inset-0 z-10 flex justify-center items-center">
      <div
        onClick={props.onBackdropClick}
        className="fixed inset-0 z-20 bg-black opacity-50"
      />
      <Container className="relative rounded-md text-red-500 z-30">
        <div className="bg-white rounded-md flex justify-center">
          Something Wrong Happened...!
        </div>
        <div className="h-10 flex justify-center items-center text-white">
          {props.message}
        </div>
      </Container>
    </section>
  );
};

export const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay
          onBackdropClick={props.onBackdropClick}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
