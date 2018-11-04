import "./ImageGrid.scss";
import React, { Component } from "react";
import Gallery from "./Gallery";

export default class ImageGrid extends Component {
  parseImages = () => {
    const { images } = this.props.data;
    console.log(images);
    return images.map(item => {
      // TODO: Activate this before deploying. Real data needs parsing here.
      item = JSON.parse(item);
      return item.regular;
    });
  };

  renderImages = () => {
    const images = this.parseImages();
    // console.log(images);
    return (
      <div className="gallery-container">
        <Gallery images={images} data={this.props.data} />
      </div>
    );
  };

  render() {
    return <div>{this.renderImages()}</div>;
  }
}
