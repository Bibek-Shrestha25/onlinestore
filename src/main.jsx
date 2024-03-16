import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "../src/Pages/Home.jsx";
import MyRoutes from "./MyRoutes.jsx";
import { Provider } from "react-redux";
import { mystore } from "./Components/reducers/mystore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={mystore}>
    {/* <GlobalContextProvider> */}
    <MyRoutes />
    {/* </GlobalContextProvider> */}
  </Provider>
  // </React.StrictMode>
);
