import React from "react";

const Button = (props) => {
  console.log("Button running...!");
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
};
export default React.memo(Button);
