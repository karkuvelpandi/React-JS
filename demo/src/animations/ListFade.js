import React, { useEffect, useState } from "react";
import "../App.css"

import Data from "../data.json";
function ListFade() {
  const [items, setItems] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  // const [shrink, setShrink] = useState(false);
  // const [deletedIndex, setDeletedIndex] = useState(null);

  useEffect(() => {
    setItems(Data);
  }, []);
  const animationHandler = (index) => {
    setClickedIndex(index);
    setFadeOut(true);
    setTimeout(() => {
      handleDelete(index);
      setFadeOut(false);
    }, 1000);
  };
  let handleDelete = (itemIndex) => {
    const newItems = items.filter((item, index) => index !== itemIndex);
    setItems(newItems);
  };
  return (
    <>
      <div>
        <ul className="">
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className={`list-none border-2 rounded-lg bg-red-500 p-10 flex w-full justify-around transition-all duration-1000 ${
                  index === clickedIndex && fadeOut
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                <img src={item.image} alt="Emp img" />
                <div>
                  <h1 className="text-bold text-3xl">Name: {item.name}</h1>
                  <h3>Id: {item.id}</h3>
                  <h3>Team: {item.team}</h3>
                </div>
                <button
                  className="relative top-5 right-5 h-10 w-24 border-2 text-white bg-black"
                  onClick={() => animationHandler(index)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ListFade;
