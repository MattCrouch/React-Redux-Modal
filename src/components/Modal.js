import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  componentDidMount() {
    this.previousActiveElement = document.activeElement;

    document.addEventListener('keydown', this.onKeyDown);

    this.hideButton.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);

    this.previousActiveElement.focus();
  }

  onKeyDown(e) {
    if (e.keyCode === 27) {
      // Escape key pressed
      this.onHide();
    }
  }

  onBackgroundClick(e) {
    if (e.target.className === "Modal") {
      this.onHide();
    }
  }

  onHide() {
    this.props.hideModal();
  }

  render() {
    return (
      <div className="Modal" data-hiding={this.props.hidingModal} onClick={this.onBackgroundClick}>
        <section className="Modal__container">
          <button
            ref={button => { this.hideButton = button; }}
            className="Modal__close"
            onClick={this.onHide}
            aria-label="Close"
          >
            ×
          </button>
          <main className="Modal__contents">
            { this.props.children }
          </main>
        </section>
      </div>
    );
  }
}

export default Modal;
