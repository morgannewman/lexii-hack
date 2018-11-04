import "./Search.scss";
import React, { Component } from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import sendContent from "../api";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const content = this.text.value;
    console.log(content);
    sendContent(content);
    this.text.value = "";
  };

  render() {
    return (
      <>
        <Nav />
        <form onSubmit={this.handleSubmit}>
          <textarea ref={text => (this.text = text)} />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </>
    );
  }
}

export default Search;
