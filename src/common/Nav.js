import "./Nav.scss";
import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <a href="/" className="nav-title">
          Lexii
        </a>
      </nav>
    );
  }
}
