import React from "react";
import "./Gallery.scss";
import CopyUrl from "./CopyUrl";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={e => this.openModal(e, index)}>
        <img src={src} key={src} alt="placeholder" />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    const { images } = this.props;
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < images.length}
          src={images[this.state.currentIndex]}
          data={this.props.data.images[this.state.currentIndex]}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnMount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }

  render() {
    const {
      closeModal,
      hasNext,
      hasPrev,
      findNext,
      findPrev,
      src
    } = this.props;
    if (!src) {
      console.log("whut");
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal} />
        <div isOpen={!!src} className="modal">
          <div className="modal-body">
            <a
              href="/search"
              className="modal-controls modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="/prev"
                className="modal-controls modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="/next"
                className="modal-controls modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} alt="placeholder" />
            <p className="gallery-context">
              <CopyUrl value={this.props.data.regular} />
              <p className="gallery-context-attribution">
                Credit:{" "}
                {this.props.data.user["portfolio_url"] ? (
                  <a
                    target="blank"
                    href={this.props.data.user["portfolio_url"] || "#"}
                  >
                    {this.props.data.user.username || "Anonymous"}
                  </a>
                ) : (
                  this.props.data.user.username || "Anonymous"
                )}{" "}
                on{" "}
                {
                  <a
                    target="blank"
                    href={this.props.data.links.html || "https://unsplash.com/"}
                  >
                    Unsplash
                  </a>
                }
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
