import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import "./styles/reset.css"
import Form from "./Form"
import reportWebVitals from "./reportWebVitals"
import RoutesController from "./RoutesController";

ReactDOM.render(
  <div>
      <Form></Form>
      <RoutesController/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
