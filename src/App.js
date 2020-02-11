import React from "react";
import logo from "./logo.svg";
import "./App.css";

export function One() {
  return <h1>ok</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <One />
    </div>
  );
}

export default App;
