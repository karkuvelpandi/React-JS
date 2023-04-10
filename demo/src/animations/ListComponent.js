import { useState, useRef, useEffect } from "react";
import { FixedSizeList } from "react-window";
import FlipMove from "react-flip-move";
import Data from "../data.json";
export const ListComponent = ({ data, onRemove }) => {
  const [items, setItems] = useState([]);

  const element = useRef();
  useEffect(() => {
    setItems(Data);
  }, []);
  const handleRemove = (itemIndex) => {
    const newItems = items.filter((item, index) => index !== itemIndex);
    setItems(newItems);
  };

  const Item = ({ index, style, item }) => (
    <div style={style}>
      <div>{item.name}</div>
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );

  // const getItemSize = () => 50;

  const renderList = ({ index, style }) => (
    <div style={style}>
      <Item index={index} item={items[index]} style={style} />
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={50}
      width={300}
    >
      {renderList}
    </FixedSizeList>
  );
};
