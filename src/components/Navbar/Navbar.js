import React, { Component } from "react";
import { Menu, Button, Modal, Avatar } from "antd";
import Auth from "./Auth";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      title: "",
      login: false
    };
  }

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  showModal = e => {
    let { login } = this.state;

    e.target.id === "Iniciar Sesión" ? (login = true) : (login = false);

    this.setState({
      visible: true,
      title: e.target.id,
      login
    });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo" />
        {localStorage.getItem("token") ? (
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item>
              <Avatar
                size="large"
                src="https://res.cloudinary.com/royquiroz/image/upload/v1541866543/Tfixeo/18767585_996982753771260_1983069507747502591_n.jpg"
              />
            </Menu.Item>
          </Menu>
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item>
              <Button
                id="Iniciar Sesión"
                type="primary"
                onClick={this.showModal}
              >
                Iniciar Sesión
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button id="Registrate" type="danger" onClick={this.showModal}>
                Registrate
              </Button>
            </Menu.Item>
          </Menu>
        )}
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          destroyOnClose={true}
          footer={null}
        >
          <Auth handleCancel={this.handleCancel} {...this.state} />
        </Modal>
      </div>
    );
  }
}

export default Navbar;
