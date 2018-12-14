import React, { Component } from "react";
import { Form, Icon, Input, Button, message } from "antd";
import axios from "axios";

const FormItem = Form.Item;

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
      },
      message: ""
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
    const base_url = "http://localhost:3000/api/auth";

    let path;
    let msg;

    this.props.login ? (path = "/login") : (path = "/register");

    axios
      .post(`${base_url}${path}`, form)
      .then(res => {
        console.log(res);
        res.status === 200
          ? (msg = "Sesion iniciada correctamente")
          : (msg = res.data.msg);
        localStorage.setItem("token", res.data.token);
        this.setState({ message: msg });
        this.info();
        this.props.handleCancel();
      })
      .catch(err => {
        err.message.includes(500)
          ? (msg = "No se pudo crear el usuario")
          : (msg = "Error al iniciar sesión");
        this.setState({ message: msg });
        this.error();
      });
  };

  info = () => {
    message.success(this.state.message, 5);
  };

  error = () => {
    message.error(this.state.message, 5);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {this.props.login ? null : (
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Nombre"
              name="name"
              onChange={this.handleChange}
            />
          </FormItem>
        )}
        {this.props.login ? null : (
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Apellido"
              name="last_name"
              onChange={this.handleChange}
            />
          </FormItem>
        )}
        <FormItem>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </FormItem>
        {this.props.login ? null : (
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Confirmar Password"
              name="confirmPassword"
              onChange={this.handleChange}
            />
          </FormItem>
        )}
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {this.props.login ? "Iniciar Sesión" : "Registro"}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Auth;
