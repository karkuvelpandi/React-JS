import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { useTransition, animated } from "react-spring";
import Data from "../data.json";
const ListFadeWithSpring = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Data);
  }, [Data]);
  // const data = [
  //   { id: 1, text: "Item 1" },
  //   { id: 2, text: "Item 2" },
  //   { id: 3, text: "Item 3" },
  //   // ...
  //   { id: 1000, text: "Item 1000" },
  // ];

  const ListItem = ({ index, style }) => {
    const transitions = useTransition(items[index], {
      from: { opacity: 0, transform: "translate3d(-50%,0,0)" },
      enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    });

    return transitions((styleProps, item) => (
      <animated.div style={{ ...style, ...styleProps }}>
        <div>
        <li
                key={item.id}
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
