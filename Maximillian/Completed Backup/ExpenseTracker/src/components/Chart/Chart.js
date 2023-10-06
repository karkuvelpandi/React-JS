import React from "react";
import { ChartBar } from "./ChartBar";

export const Chart = (props) => {
  const dataPointValuesArr = props.dataPoints.map((data) => data.value);
  // Here we have array of values, but the max() method require each values as a separate argument.
  // So we can use spread operator to pullout all the value from an array and pass it into the max() function.
  const maxValue = Math.max(...dataPointValuesArr);
  return (
    <div className="flex gap-5 overflow-x-auto justify-around p-5">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
