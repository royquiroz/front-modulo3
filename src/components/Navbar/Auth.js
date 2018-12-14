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

    console.log(form);

    this.setState({ form });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { form } = this.state;
    const base_url = "http://localhost:3000/api";

    axios
      .post(`${base_url}/auth/register`, form)
      .then(res => {
        console.log(res);
        this.setState({ message: res.data.msg });
        this.info();
        this.props.handleCancel();
      })
      .catch(err => {
        console.log(err);
        this.setState({ message: "No se pudo crear el usuario" });
        this.info();
      });
  };

  info = () => {
    message.info(this.state.message);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Nombre"
            name="name"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Apellido"
            name="last_name"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Apellido"
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
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Confirmar Password"
            name="confirmPassword"
            onChange={this.handleChange}
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Registro
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Auth;
