import React, { Component } from "react";
import { Col, Row } from "antd";

class Profile extends Component {
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
    let { form, dirty } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;
    dirty = true;
    this.setState({ form, dirty });
  };

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <Row>
          <Col span={8} offset={8}>
            <h1 style={{ textAlign: "center" }}>Profile</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
