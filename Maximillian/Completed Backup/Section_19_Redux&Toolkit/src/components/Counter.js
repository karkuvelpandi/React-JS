import React, { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter.reducer";
const Counter = () => {
  // const [localCount, setLocalCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    // setLocalCount(localCount + 1);
    // setLocalCount(localCount + 1);
    // setLocalCount(localCount + 1);
    dispatch(counterActions.increment());
  };
  console.log("Component re-executing");
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); //Pass Payload as argument to the action creator function
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}
      {/* Local <div className={classes.value}>{localCount}</div> */}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By Amount</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Connecting Redux to class based components.

// class Counter extends React.Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.karkuvel}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     // Here left side name is alias just like we store value return from the useSelector()
//     karkuvel: state.count,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCR" }),
//     decrement: () => dispatch({ type: "DECR" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
