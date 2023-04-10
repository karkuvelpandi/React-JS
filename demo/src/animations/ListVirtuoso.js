import React, { useState, useEffect } from "react";

import Data from "../data.json";
import { Virtuoso } from "react-virtuoso";
import { LogLevel } from "react-virtuoso";
// LogLevel.DEBUG=globalThis.VIRTUOSO_LOG_LEVEL

export const ListVirtuoso = () => {
  const [data, setData] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [deletedId, setDeletedId] = useState();
  useEffect(() => {
    setData(Data);
  }, []);

  const deleteHandler = (deletingId) => {
    setFadeOut(true);
    setDeletedId(deletingId);
    setTimeout(() => {
      setData(data.filter((item) => item.id !== deletingId));
      setFadeOut(false);
    }, 1000);
    fun();
  };
  const fun = () => {
    console.log(fadeOut, deletedId);
  };
  return (
    <Virtuoso
      style={{ height: "400px" }}
      totalCount={data.length}
      itemContent={(index) => (
        <List
          employee={data[index]}
          deletedId={deletedId}
          fadeOut={fadeOut}
          deleteHandler={deleteHandler}
        />
      )}
    />
  );
};

const List = ({ employee, deletedId, fadeOut, deleteHandler }) => {
  return (
    <div key={employee.id} className={`transform transition-all duration-1000`}>
      <div
        key={employee.id}
        className={`relative w-80 h-40 border-4 bg-orange-200 transform transition-all duration-1000 ${
          deletedId === employee.id && fadeOut ? "height-trans" : ""
        }`}
      >
        <h4>{employee.name}</h4>
        <h6>{employee.designation}</h6>
        <img src={employee.image} alt="img" height="100" width="100" />
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => deleteHandler(employee.id)}
        >
          X
        </span>
      </div>
    </div>
  );
};
