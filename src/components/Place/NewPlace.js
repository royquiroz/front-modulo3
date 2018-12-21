import React, { Component } from "react";
import { Col, Row, Form, Input, Button, InputNumber, Switch } from "antd";

const FormItem = Form.Item;

class NewPlace extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={8} offset={8}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                <Switch defaultChecked />
              </FormItem>
              <FormItem>
                <Input
                  placeholder="Nombre"
                  name="name"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <InputNumber
                  formatter={value =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace(/\$\s?|(,*)/g, "")}
                  onChange={this.handleChange}
                />{" "}
                Pesos
              </FormItem>
              <FormItem>
                <Input
                  placeholder="Direccion"
                  name="address"
                  onChange={this.handleChange}
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Crear Espacio
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewPlace;
