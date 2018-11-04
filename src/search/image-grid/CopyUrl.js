import "./CopyUrl.scss";
import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaPaste as PasteIcon } from "react-icons/fa";

export default class CopyUrl extends Component {
  state = {
    value: "",
    copied: false
  };

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      this.timeout = setTimeout(() => this.setState({ copied: false }), 3000);
    });
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className={this.props.className || "copy-container"}>
        {this.state.copied && (
          <p className="copy-alert">Copied to Clipboard.</p>
        )}
        <div className="copy-box">
          <CopyToClipboard text={this.state.value} onCopy={this.handleCopy}>
            <button className="copy-clickarea">
              <div className="copy-clickarea-inner">
                <span className="copy-clickarea-text">{this.state.value}</span>
                <div className="copy-clickarea-icon">
                  <PasteIcon />
                </div>
              </div>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}
