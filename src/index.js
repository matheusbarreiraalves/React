// Importando o React
import React from "react";
//importe do DOM
import ReactDOM from "react-dom";
// Importando o componenet APP
import App from "./App";
// Importando as rotas
import { BrowserRouter } from "react-router-dom";
// Importando o css
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
