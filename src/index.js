import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";

import App from "./App";
import "./input.css"
//import store from "./redux/store";

import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  //<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</Provider>
);
