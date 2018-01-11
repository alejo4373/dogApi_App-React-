import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import axios from "axios";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

axios
  .get("http://xkcd.com/614/info.0.json")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
