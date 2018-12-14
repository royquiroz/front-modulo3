import React, { Component } from "react";
import { Menu, Button, Modal } from "antd";
import Auth from "./Auth";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item>
            <Button type="primary">Iniciar Sesion</Button>
          </Menu.Item>
          <Menu.Item>
            <Button type="danger" onClick={this.showModal}>
              Registrate
            </Button>
          </Menu.Item>
        </Menu>
        <Modal
          title="Registrate"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          footer={null}
        >
          <Auth handleCancel={this.handleCancel} />
        </Modal>
      </div>
    );
  }
}

export default Navbar;
