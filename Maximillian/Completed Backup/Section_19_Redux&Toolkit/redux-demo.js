const redux = require("redux");
// reducer function

const CounterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

// store
const store = redux.createStore(CounterReducer);

// Subscribable function (here this is a demo example of Component in react)
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribing a function to the redux
store.subscribe(counterSubscriber);

// Dispatching an action
store.dispatch({ type: "" }); //currently no unique logic in reducer.
