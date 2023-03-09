import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App></App>
  </Router>
);
