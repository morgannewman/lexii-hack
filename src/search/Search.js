import "./Search.scss";
import React, { Component } from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import sendContent from "../api";

class Search extends Component {
  state = {
    submitting: false,
    result: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const content = this.text.value;
    this.setState({ submitting: true }, () => {
      this.text.value = "";
      sendContent(content).then(res => {
        console.log("response:", res);
        this.setState({ result: res });
      });
    });
  };

  render() {
    return (
      <>
        <Nav />
        <main className="main">
          <div className="search-form-container">
            <form className="search-form" onSubmit={this.handleSubmit}>
              <div className="search-container">
                <textarea
                  className="search-input"
                  ref={text => (this.text = text)}
                />
                <button
                  className="search-submit"
                  type="submit"
                  disabled={this.state.submitting ? true : false}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Search;
