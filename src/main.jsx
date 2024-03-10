import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "../src/Pages/Home.jsx";
import MyRoutes from "./MyRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);
