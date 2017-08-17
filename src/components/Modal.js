import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      closing: false,
    }

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      this.onClose();
    }
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
