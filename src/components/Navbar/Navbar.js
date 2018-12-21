import React, { Component } from "react";
import { Menu, Button, Modal, Avatar, message } from "antd";
import { NavLink } from "react-router-dom";
import Auth from "./Auth";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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

  clearStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    message.success("Cerraste sesión exitosamente", 3);
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
              <a href="/place">Da de alta tu espacio</a>
            </Menu.Item>
            <SubMenu
              title={
                this.props.user === null ? (
                  <Avatar
                    size="large"
                    src="https://res.cloudinary.com/royquiroz/image/upload/v1541363947/Tfixeo/male.png"
                  />
                ) : (
                  <Avatar size="large" src={this.props.user.profile_pic} />
                )
              }
            >
              <MenuItemGroup>
                <Menu.Item key="1">
                  <NavLink
                    style={{ border: 0, textAlign: "left", paddingLeft: "1%" }}
                    exact
                    to={`/profile`}
                  >
                    Perfil
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink
                    style={{ border: 0, textAlign: "left", paddingLeft: "1%" }}
                    onClick={this.clearStorage}
                    exact
                    to="/"
                  >
                    Cerrar Sesión
                  </NavLink>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
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
          <Auth
            handleCancel={this.handleCancel}
            {...this.state}
            updateUser={this.props.updateUser}
          />
        </Modal>
      </div>
    );
  }
}

export default Navbar;
