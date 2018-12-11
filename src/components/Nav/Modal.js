import React, { Component } from "react";
import { Dialog } from "@blueprintjs/core";
import Form from "./Form";

class Modal extends Component {
  render() {
    return (
      <Dialog
        className="bp3-dark"
        onClose={this.props.handleClose}
        {...this.props}
      >
        <div className="bp3-dialog-header">
          <h3>Registrate</h3>
        </div>
        <div className="bp3-dialog-body">
          <Form />
        </div>
      </Dialog>
    );
  }
}

export default Modal;
