import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
    <App />
  ,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
