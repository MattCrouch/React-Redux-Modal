import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      closing: false,
    }

    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onBackgroundClick(e) {
    if (e.target.className === "Modal") {
      this.onClose();
    }
  }

  onClose() {
    this.setState({ closing: true });
    
    setTimeout(() => {
      this.props.closeModal();
    }, 200);
  }

  render() {
    return (
      <div className="Modal" data-closing={this.state.closing} onClick={this.onBackgroundClick}>
        <section className="Modal__container">
          <button className="Modal__close" onClick={this.onClose} aria-label="Close">×</button>
          <main className="Modal__contents">
            { this.props.children }
          </main>
        </section>
      </div>
    );
  }
}

export default Modal;
