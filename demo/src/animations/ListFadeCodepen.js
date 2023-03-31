import React from "react";
import { VariableSizeList as List } from "react-window";

const Row = ({ index, style, toggleSize }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}, Size {style.height}{" "}
    <button onClick={() => toggleSize(index)}>Toggle Size</button>
  </div>
);

class ListFadeCodepen extends React.Component {
  state = {
    rowSizes: new Array(1000).fill(true).reduce((acc, item, i) => {
      acc[i] = 50;
      return acc;
    }, {}),
  };

  listRef = React.createRef();

  renderItem = (props) => <Row {...props} toggleSize={this.toggleSize} />;

  render() {
    return (
      <List
        ref={this.listRef}
        className="List"
        height={150}
        itemCount={1000}
        itemSize={this.getSize}
        width={300}
      >
        {this.renderItem}
      </List>
    );
  }

  toggleSize = (i) => {
    this.setState((prevState) => ({
      rowSizes: {
        ...prevState.rowSizes,
        [i]: prevState.rowSizes[i] === 50 ? 0 : 50,
      },
    }));
    if (this.listRef.current) {
      this.listRef.current.resetAfterIndex(i);
    }
  };

  getSize = (i) => {
    return this.state.rowSizes[i];
  };
}

export default ListFadeCodepen;
