import React, { Component } from "react";
import "./App.css";
import { Layout } from "antd";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%"
          }}
        >
          <Navbar />
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Router />
        </Content>
        <Footer>
          <h4>Este es un footer</h4>
        </Footer>
      </Layout>
    );
  }
}

export default App;
