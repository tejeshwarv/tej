import React, { Component } from "react";
import { Drawer, Button, Icon } from "antd";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class sideNav extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  redirect = e => {
    e.preventDefault();
    this.props.history.push(e.target.pathname);
    this.onClose();
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px"
        }}
      >
        <Icon
          type="menu"
          style={{
            color: "white",
            fontSize: "30px",
            position: "relative",
            top: "5px"
          }}
          onClick={this.showDrawer}
        />
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Router>
            <div>
              <div>
                <Link to="/tej/" onClick={this.redirect}>
                  Home
                </Link>
              </div>

              <div>
                <Link to="/tej/about" onClick={this.redirect}>
                  About
                </Link>
              </div>

              <div>
                <Link to="/tej/users" onClick={this.redirect}>
                  Users
                </Link>
              </div>
            </div>
          </Router>
        </Drawer>
      </div>
    );
  }
}

export default withRouter(sideNav);
