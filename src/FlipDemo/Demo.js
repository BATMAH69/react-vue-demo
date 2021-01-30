/* eslint-disable */
import React, { Component } from "react";
import FlipBook from "./Flipbook";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null
    }
    this.flipbook = React.createRef();
  }

  onFlipLeftStart(page) {
    return console.log('flip-left-start', page);
  }
  onFlipLeftEnd(page) {
    console.log('flip-left-end', page);
    return window.location.hash = '#' + page;
  }
  onFlipRightStart(page) {
    return console.log('flip-right-start', page);
  }
  onFlipRightEnd(page) {
    console.log('flip-right-end', page);
    return window.location.hash = '#' + page;
  }
  onZoomStart(zoom) {
    return console.log('zoom-start', zoom);
  }
  onZoomEnd(zoom) {
    return console.log('zoom-end', zoom);
  }
  setPageFromHash() {
    const number  = parseInt(window.location.hash.slice(1), 10);
    if (isFinite(number)) {
      return this.pageNum = number;
    }
  }

  handleArrowNavigation(ev) {

    const flipbook = document.querySelector('.flipbook').ref;
    if (!flipbook) {
      return;
    }
    if (ev.keyCode === 37 && flipbook.canFlipLeft) {
      flipbook.flipLeft();
    }
    if (ev.keyCode === 39 && flipbook.canFlipRight) {
      return flipbook.flipRight();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleArrowNavigation)
    setTimeout((() => {
      this.setState({
        pages: [null, 'dist/images/1.jpg', 'dist/images/2.jpg', 'dist/images/3.jpg', 'dist/images/4.jpg', 'dist/images/5.jpg', 'dist/images/6.jpg'],
        pagesHiRes: [null, 'dist/images-large/1.jpg', 'dist/images-large/2.jpg', 'dist/images-large/3.jpg', 'dist/images-large/4.jpg', 'dist/images-large/5.jpg', 'dist/images-large/6.jpg'],
      });
    }), 1);
    window.addEventListener('hashchange', this.setPageFromHash);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleArrowNavigation)
    window.removeEventListener('hashchange', this.setPageFromHash);

  }

  render() {
    const { hasMouse } = this.state;

    return (
      <div
        id="app"
        className={{ 'has-mouse': hasMouse }}
        onTouchStart={() => this.setState({hasMouse: false})}
      >
        <div onClick={() => this.setState({
          pages:[null, 'dist/images/3.jpg', 'dist/images/4.jpg', 'dist/images/5.jpg', 'dist/images/6.jpg'],
          startPage: 1,
        })}>223344</div>
        <FlipBook
          className="flipbook"
          pages={this.state.pages}
          pagesHiRes={this.state.pagesHiRes}
          startPage={this.state.startPage}
          ref={this.flipbook}
          flipLeftStart={this.onFlipLeftStart}
          flipLeftEnd={this.onFlipLeftEnd}
          flipRightStart={this.onFlipRightStart}
          flipRightEnd={this.onFlipRightEnd}
          zoomStart={this.onZoomStart}
          zoomEnd={this.onZoomEnd}
        />
        <p className="credit">
          Photos from
          <a href="https://unsplash.com/" target="_blank">
            Unsplash
          </a>
          .
        </p>
      </div>
    );
  }
}
