import "./Landing.scss";
import React, { Component } from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import sendContent from "../api";

class Landing extends Component {
  state = {
    content: ""
  };

  componentDidMount() {
    this.get();
  }
  get() {
    sendContent({ test: "data" }).then(res => {
      this.setState({ content: JSON.stringify(res) });
    });
  }

  render() {
    return (
      <>
        <Nav />
        <div>Hello world from Landing</div>
        <div>{this.state.content}</div>
        <Footer />
      </>
    );
  }
}

export default Landing;
