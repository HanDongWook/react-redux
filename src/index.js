import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// 1. 'document.getElementById("root")'를 변수(root)에 할당합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. 할당된 'root' 변수의 render() 메서드를 호출합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);