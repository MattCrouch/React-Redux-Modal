// Import React
import React, { Component } from 'react';

// Import styles
import './Modal.css';

class Modal extends Component {
  constructor() {
    super();

    // Bind functions to this component
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  // What happens when the modal first appears
  componentDidMount() {
    // Remember the previously active element
    this.previousActiveElement = document.activeElement;

    // Close the window when the user presses the Esc key
    document.addEventListener('keydown', this.onKeyDown);

    // Move focus to within the modal
    this.hideButton.focus();
  }

  // Clean up when the modal is removed
  componentWillUnmount() {
    // Remove Esc event listener
    document.removeEventListener('keydown', this.onKeyDown);

    // Move focus back to previous position
    this.previousActiveElement.focus();
  }

  // When a key is pressed while the modal is active
  onKeyDown(e) {
    if (e.keyCode === 27) {
      // Escape key pressed
      this.onHide();
    }
  }

  // Close the modal when the background is clicked
  onBackgroundClick(e) {
    if (e.target.className === "Modal") {
      this.onHide();
    }
  }

  // Hide the modal when it is closed
  onHide() {
    this.props.hideModal();
  }

  // Create a generic wrapper component for our modal windows
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
            {/* Display whatever the contents of this modal is */}
            { this.props.children }
          </main>
        </section>
      </div>
    );
  }
}

export default Modal;
