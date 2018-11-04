import "./ImageGrid.scss";
import React, { Component } from "react";
import Url from "url-parse";
import Gallery from "./Gallery";

// {
//   src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//   thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//   thumbnailWidth: 320,
//   thumbnailHeight: 174,
//   isSelected: true,
//   caption: "After Rain (Jeshu John - designerspics.com)"
// }

const getDimensions = url => {
  const params = new Url(url, true).query;
  console.log(params);
  return {
    width: Number(params.w) || 200,
    height: Number(params.h) || 200
  };
};

export default class ImageGrid extends Component {
  parseImages = () => {
    const { images } = this.props.data;
    return images.map(item => {
      // const dimensions = getDimensions(item.thumb);

      return item.regular;
    });
  };

  handleImageClick = () => {};

  renderImages = () => {
    const images = this.parseImages();
    console.log(images);
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
