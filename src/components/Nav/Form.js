import React, { Component } from "react";
import { Button } from "@blueprintjs/core";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input className="bp3-input bp3-round" type="text" name="name" placeholder="Nombre" onChange={this.props.handleChange} />
        <input
          className="bp3-input bp3-round"
          type="text"
          name="last_name"
          placeholder="Apellido"
          onChange={this.props.handleChange}
        />
        <input className="bp3-input bp3-round" type="text" name="email" placeholder="Email" onChange={this.props.handleChange} />
        <input
          className="bp3-input bp3-round"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.props.handleChange}
        />
        <input
          className="bp3-input bp3-round"
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Password"
          onChange={this.props.handleChange}
        />
        <Button type="submit" text="Registro" />
      </form>
    );
  }
}

export default Form;
