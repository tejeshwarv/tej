import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Drawer, Button } from "antd";

import SideNav from "./sideNav";
import Heading from "./heading";

const One = () => {
  return <h1>ok</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <SideNav />
        </Navbar>

        <h1>hello</h1>
        <One />
        <Heading />
      </div>
    );
  }
}

export default App;
