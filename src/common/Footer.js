import "./Footer.scss";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">
          Made{" "}
          <a href="https://www.smallbizhack.com/" target="blank">
            @SmallBizHack
          </a>{" "}
          with {"<3"} by Dasta — Joshua — Meghana — Morgan
        </p>
      </footer>
    );
  }
}
