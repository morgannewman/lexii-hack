import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default class CopyUrl extends Component {
  state = {
    value: "",
    copied: false
  };

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    return (
      <div className={this.props.className || "copy-container"}>
        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>
      </div>
    );
  }
}
