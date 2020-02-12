import React, { Component } from "react";
import { Drawer, Button, Icon } from "antd";
import "antd/dist/antd.css";

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
          style={{ color: "white", fontSize: "30px" }}
          onClick={this.showDrawer}
        />
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default sideNav;
