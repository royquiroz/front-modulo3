import React, { Component } from "react";
import Place from "../Place/Place";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = e => {
    let { form, dirty } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;
    dirty = true;
    this.setState({ form, dirty });
  };

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <Place />
      </div>
    );
  }
}

export default Home;
