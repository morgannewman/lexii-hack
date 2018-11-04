import "./ImageGrid.scss";
import React, { Component } from "react";
import Url from "url-parse";
import Gallery from "./Gallery";

export default class ImageGrid extends Component {
  parseImages = () => {
    const { images } = this.props.data;
    console.log(images);
    return images.map(item => {
      item = JSON.parse(item);
      return item.regular;
    });
  };

  renderImages = () => {
    const images = this.parseImages();
    // console.log(images);
    return (
      <div className="gallery-container">
        <Gallery images={images} />
      </div>
    );
  };

  render() {
    return <div>{this.renderImages()}</div>;
  }
}
