import React, { useEffect, useState, useRef } from "react";
import "../App.css";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
import Data from "../data.json";
function ListFade() {
  const [items, setItems] = useState([]);
  //  const [shrink,setShrink]=useState(false)
  const element = useRef();
  useEffect(() => {
    setItems(Data);
  }, []);
  const animationHandler = (index) => {
    element.height = "0px";
    // setShrink(true)
    handleDelete(index);
  };
  let handleDelete = (itemIndex) => {
    setTimeout(() => {
      const newItems = items.filter((item, index) => index !== itemIndex);
      setItems(newItems);
    }, [500]);
  };

  return (
    <>
      <div>
        <ul className="transition-all duration-500">
          {items.map((item, index) => {
            return (
              <li
                style={{ transition: "height 0.3s ease" }}
                ref={element}
                key={index}
                className={`list-none border-2 rounded-lg bg-red-500 p-10 flex w-full justify-around transition-all duration-1000 `}
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
