import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Icon } from "antd";
import SideNav from "./sideNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function About() {
  return <h1>About</h1>;
}

export function Users() {
  return (
    <h1>
      Users<Link to={"/tej/about"}>home</Link>
    </h1>
  );
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <Icon
                type="user"
                style={{
                  color: "white",
                  fontSize: "30px",
                  position: "relative",
                  top: "-5px"
                }}
              />
              {""}
              &nbsp; React Bootstrap
            </Navbar.Brand>
            <SideNav />
          </Navbar>

          <Switch>
            <Route exact path="/tej/about" component={About} />
            <Route exact path="/tej/users" component={Users} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
