import React from "react";

export const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="h-auto w-6">
      <div className="h-40 w-4 bg-white rounded-md overflow-hidden mx-auto flex items-end">
        <div
          className="bg-purple-700 w-full transition-all duration-500 ease-out"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="font-semibold text-white">{props.label}</div>
    </div>
  );
};
