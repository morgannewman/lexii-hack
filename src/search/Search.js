import "./Search.scss";
import React, { Component } from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import sendContent from "../api";
// import MOCK_DATA from "../MOCK_DATA";
import ImageGrid from "./image-grid/ImageGrid";

class Search extends Component {
  state = {
    submitting: false,
    result: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const content = this.text.value;
    this.setState({ submitting: true }, () => {
      sendContent(content).then(res => {
        console.log(res);
        this.setState({
          result: res,
          submitting: false
        });
      });
    });
  };

  renderForm() {
    return (
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
    );
  }

  renderImages() {
    return <div>images go here</div>;
  }

  renderLoadingScreen() {
    return (
      <div className="search-loading-container">
        <div className="search-loading">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <Nav />
        <main className="main">
          {this.state.result ? (
            <ImageGrid data={this.state.result} />
          ) : this.state.submitting ? (
            this.renderLoadingScreen()
          ) : (
            this.renderForm()
          )}
        </main>
        <Footer />
      </>
    );
  }
}

export default Search;
