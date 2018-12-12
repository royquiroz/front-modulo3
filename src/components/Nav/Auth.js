import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleSubmit = e => {
    let { form } = this.state;
    const base_url = "http://localhost:3000/api";
    e.preventDefault();

    axios
      .post(`${base_url}/auth/register`, form)
      .then(() => {
        console.log(this);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    const { form } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;

    console.log(form);

    this.setState({ form });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="bp3-input bp3-round"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={this.handleChange}
        />
        <input
          className="bp3-input bp3-round"
          type="text"
          name="last_name"
          placeholder="Apellido"
          onChange={this.handleChange}
        />
        <input
          className="bp3-input bp3-round"
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          className="bp3-input bp3-round"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <input
          className="bp3-input bp3-round"
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Password"
          onChange={this.handleChange}
        />
        <Button type="submit" text="Registro" />
      </form>
    );
  }
}

export default Auth;
