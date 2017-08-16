import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onBackgroundClick(e) {
    if (e.target.className === "Modal") {
      this.props.closeModal();
    }
  }

  onClose(e) {
    this.props.closeModal();
  }

  render() {
    return (
      <div className="Modal" onClick={this.onBackgroundClick}>
        <section className="Modal__container">
          <button className="Modal__close" onClick={this.onClose}>x</button>
          <main className="Modal__contents">
            { this.props.children }
          </main>
        </section>
      </div>
    );
  }
}

export default Modal;
