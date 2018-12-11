import React, { Component } from "react";
import {
  Button,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Modal from "./Modal";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      autoFocus: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      isOpen: false,
      usePortal: true
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div>
        <Navbar className="bp3-dark">
          <NavbarGroup align="left">
            <NavbarHeading>
              <Icon icon="box" iconSize={25} intent="danger" />
            </NavbarHeading>
            <NavbarDivider />
          </NavbarGroup>
          <NavbarGroup align="right">
            <Button
              className="bp3-minimal bp3-intent-primary"
              text="Iniciar Sesion"
            />
            <Button
              className="bp3-intent-danger"
              text="Registrarse"
              onClick={this.handleOpen}
            />
          </NavbarGroup>
        </Navbar>
        <Modal handleClose={this.handleClose} {...this.state} />
      </div>
    );
  }
}

export default Nav;
