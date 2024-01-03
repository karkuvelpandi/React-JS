import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.reducer";
import authReducer from "./auth.reducer";
//
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
