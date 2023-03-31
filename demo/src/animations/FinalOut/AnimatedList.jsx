import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import Data from "../../data.json";
function AnimatedList() {
  const [employees, setEmployees] = useState([]);
  const [isAnimate, setIsAnimate] = useState(false);
  const [clickedId, setClickedId] = useState();

  useEffect(() => {
    setEmployees(Data);
  }, []);
  const deleteEmployee = (id) => {
    setIsAnimate(true);
    setClickedId(id);
    setTimeout(() => {
      const newList = employees.filter((item) => item.id !== id);
      setEmployees(newList);
      setIsAnimate(false);
    }, 500);
  };

  return (
    <ul className="animated-list">
      {employees.map((item, index) => {
        return (
          <EmployeeCard
            item={item}
            deleteEmployee={deleteEmployee}
            isAnimate={isAnimate}
            clickedId={clickedId}
            setClickedId={setClickedId}
            id={item.id}
          />
        );
      })}
    </ul>
  );
}

export default AnimatedList;
