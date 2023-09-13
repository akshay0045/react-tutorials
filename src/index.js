import React from 'react';
import ReactDom from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//ReactDom.render(<App/>,document.getElementById('root'));

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
