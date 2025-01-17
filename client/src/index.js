import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//const store = configureStore({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
