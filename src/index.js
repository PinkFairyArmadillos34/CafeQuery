import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import "./styles.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);