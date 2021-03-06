import React, { Component } from "react";
import { Col, Row, Form, Input, Button } from "antd";
import Avatar from "./Avatar";
import axios from "axios";

const FormItem = Form.Item;
const { TextArea } = Input;

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        last_name: "",
        password: "",
        description: ""
      }
    };
  }

  componentWillMount() {
    const base_url = `http://localhost:3000/api/auth/${this.props.user._id}`;
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    };

    axios
      .get(base_url, { headers })
      .then(res => {
        console.log("Data desde component profile", res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    let { form } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;
    console.log(form);

    this.setState({ form });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { form } = this.state;
    const base_url = `http://localhost:3000/api/auth/${this.props.user._id}`;
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    };

    //console.log(form);

    axios
      .patch(base_url, form, { headers })
      .then(res => {
        this.props.updateUser(JSON.stringify(res.data.user));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col span={8} offset={8}>
            <h1 style={{ textAlign: "center" }}>Profile</h1>
            <Avatar />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                <Input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  onChange={this.handleChange}
                  defaultValue={this.props.user.name}
                />
              </FormItem>
              <FormItem>
                <Input
                  type="text"
                  placeholder="Apellido"
                  name="last_name"
                  onChange={this.handleChange}
                  defaultValue={this.props.user.last_name}
                />
              </FormItem>
              <FormItem>
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                  disabled
                  defaultValue={this.props.user.email}
                />
              </FormItem>
              <FormItem>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <TextArea
                  rows={3}
                  placeholder="Escribe algo sobre ti"
                  name="description"
                  onChange={this.handleChange}
                  defaultValue={this.props.user.description}
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Guardar
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
