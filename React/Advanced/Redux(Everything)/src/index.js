import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./ShopApp/redux/Store";
import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
        <Provider store={Store}>
          <App/>
        </Provider>
  </BrowserRouter>
);
