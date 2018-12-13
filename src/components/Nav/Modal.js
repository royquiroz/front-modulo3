import React, { Component } from "react";
import { Dialog } from "@blueprintjs/core";
import Auth from "./Auth";

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
          <Auth
            handleClose={this.props.handleClose}
            message={this.props.msg}
            updateMessage={this.props.updateMessage}
            addToast={this.props.addToast}
          />
        </div>
      </Dialog>
    );
  }
}

export default Modal;
