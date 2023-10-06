import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="flex bg-slate-300 p-3 mb-2 rounded-md">{children}</div>
  );
};
