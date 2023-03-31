import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { useTransition, animated } from "react-spring";
import Data from "../data.json";
const ListFadeWithSpring = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Data);
  }, []);

  const ListItem = ({ index, style }) => {
    const transitions = useTransition(items[index], {
      trail: 100,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: {
        height: 0,
        opacity: 0,
        transform: "scale(0) translateX(0%)",
      },
    });
    const deleteHandler = (id) => {
      setTimeout(() => {
        setItems(items.filter((item) => item.id !== id));
      }, 500);
    };
    return transitions((styleProps, item) => (
      <animated.div
        style={{ ...style, ...styleProps }}
        className="transform transition-all duration-1000"
      >
        <div>
          <li
            key={item.id}
            className={`list-none border-2 rounded-lg bg-red-500 p-10 flex w-full justify-around transition-all duration-1000 `}
          >
            <img src={item.image} alt="Emp img" width="150px" height="150px" />
            <div>
              <h1 className="text-bold text-3xl">Name: {item.name}</h1>
              <h3>Id: {item.id}</h3>
              <h3>Team: {item.team}</h3>
            </div>
            <button
              className="relative top-5 right-5 h-10 w-24 border-2 text-white bg-black"
              onClick={() => deleteHandler(item.id)}
            >
              Delete
            </button>
          </li>
        </div>
      </animated.div>
    ));
  };

  return (
    <List height={800} itemCount={items.length} itemSize={250} width={800}>
      {ListItem}
    </List>
  );
};
export default ListFadeWithSpring;
