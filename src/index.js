import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducers
import authReducer from "./controllers/redux/authReducer";
import bugReducer from "./controllers/redux/bugReducer";
import userReducer from "./controllers/redux/userReducer";
// Redux configure
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
