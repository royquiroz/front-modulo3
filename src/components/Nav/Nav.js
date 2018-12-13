import React, { Component } from "react";
import {
  Button,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Toaster
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
      usePortal: true,
      msg: ""
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  updateMessage = msg => {
    this.setState({ msg: msg });
  };

  refHandlers = {
    toaster: ref => (this.toaster = ref)
  };

  addToast = () => {
    if (this.state.msg.length > 0)
      return this.toaster.show({ message: this.state.msg });
  };

  render() {
    console.log(this.state.msg);

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
        <Modal
          handleClose={this.handleClose}
          updateMessage={this.updateMessage}
          addToast={this.addToast}
          {...this.state}
        />
        <Toaster ref={this.refHandlers.toaster} position="top" />
      </div>
    );
  }
}

export default Nav;
