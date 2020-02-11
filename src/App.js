import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Heading from "./heading";

export function One() {
  return <h1>ok</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <One />
      <Heading />
    </div>
  );
}

export default App;
