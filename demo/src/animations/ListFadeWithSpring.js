import { useState } from "react";
import { FixedSizeList } from "react-window";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ITEM_HEIGHT = 50; // or any other value based on your list item height

function List({ items, onDelete }) {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const renderRow = ({ index, style }) => {
    const item = items[index];

    return (
      <CSSTransition key={item.id} timeout={500} classNames="fade-exit">
        <div
          className=" h-8 w-20 bg-red-300 flex justify-between"
          style={style}
        >
          <span>{item.title}</span>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      </CSSTransition>
    );
  };

  return (
    <TransitionGroup>
      <FixedSizeList
        height={ITEM_HEIGHT * items.length}
        itemCount={items.length}
        itemSize={ITEM_HEIGHT}
        width={400}
      >
        {renderRow}
      </FixedSizeList>
    </TransitionGroup>
  );
}

function ListFadeWithSpring() {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <List items={items} onDelete={handleDelete} />
    </div>
  );
}

export default ListFadeWithSpring;
