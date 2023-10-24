import React, { useMemo } from "react";

const DemoComp = (props) => {
  console.log("Demo component is running...");
  const sortedList = useMemo(() => {
    console.log("Sorting...");
    return props.items.sort((a, b) => a - b);
  }, [props.items]);
  return (
    <>
      <p>{props.title}</p>
      <ul>
        {sortedList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default React.memo(DemoComp);
