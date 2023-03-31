import React from "react";

function EmployeeCard({ item, deleteEmployee, isAnimate, clickedId, id }) {
  return (
    <li
      className={`list-item ${
        clickedId === id && isAnimate ? "animate-height" : ""
      }`}
    >
      <div className="employee-card">
        <img src={item.image} alt="img" />
        <div className="text">
          <h3>{item.name}</h3>
          <p>Designation : {item.designation}</p>
          <p>Team : {item.team}</p>
        </div>
        <span className="close" onClick={() => deleteEmployee(item.id)}>
          x
        </span>
      </div>
    </li>
  );
}

export default EmployeeCard;
