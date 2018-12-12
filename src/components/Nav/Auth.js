import React, { Component } from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
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

  handleChange = e => {
    const { form } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;

    this.setState({ form });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { form } = this.state;
    const base_url = "http://localhost:3000/api";

    axios
      .post(`${base_url}/auth/register`, form)
      .then(res => {
        this.props.message = res.data.msg;
        //this.toaster.show({ message: msg });
      })
      .catch(err => {
        this.props.message = err.message;
      });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup
            round="true"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <InputGroup
            round="true"
            type="text"
            name="last_name"
            placeholder="Apellido"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <InputGroup
            round="true"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <InputGroup
            round="true"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <InputGroup
            round="true"
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Password"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          type="submit"
          text="Registro"
          onClick={this.props.handleClose}
        />
      </form>
    );
  }
}

export default Auth;
