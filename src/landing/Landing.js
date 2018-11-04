import "./Landing.scss";
import React, { Component } from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
// import sendContent from "../api";

class Landing extends Component {
  render() {
    return (
      <>
        <Nav />

        <Footer />
      </>
    );
  }
}

export default Landing;
