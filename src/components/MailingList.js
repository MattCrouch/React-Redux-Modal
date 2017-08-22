// Import components
import React, { Component } from 'react';
import Modal from './Modal';
import ModalOptions from './ModalOptions';

// Import styles and icon
import './MailingList.css';
import EmailIcon from '../email.svg';

class MailingList extends Component {
  constructor() {
    super();

    // Use controlled components to make transmission easier
    this.state = {
      emailAddress: '',
    }

    // Bind functions to this component
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  // Reflect changes in email address field within state
  onChange(e) {
    this.setState({
      emailAddress: e.target.value,
    })
  }

  // Use submit action in case user submits with Enter key
  onSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state.emailAddress);
  }

  // Simulate form submit when clicking "Sign Up" button
  onSignUp() {
    // Need to submit on another button to use native form validation
    this.formSubmit.click();
  }

  // Hide the modal
  onDismiss(e) {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal {...this.props}>
        <div className="MailingList">
          <div className="MailingList__body">
            <h2 className="MailingList__title">
              Don't forget to sign up to our mailing list
            </h2>

            <div className="MailingList__message">
              <img src={EmailIcon} alt="Sign up to our mailing list" className="MailingList__image" />
              
              <div className="MailingList__messageContent">
                <p>Enter your email address and be the first to hear about our latest offers!</p>
                <p>Sign up today and get a <strong>10% discount</strong> on your next order.</p>
                
                <form onSubmit={this.onSubmit}>
                  <input type="email" value={this.state.emailAddress} onChange={this.onChange} required className="MailingList__email" aria-label="Your email address" placeholder="Enter your email address" />
                  {/* Include an invisible submit button to allow browsers to perform native validation */}
                  <input type="submit" value="Sign Up" style={{ display: 'none' }} ref={formSubmit => this.formSubmit = formSubmit } />
                </form>
              </div>
            </div>
          </div>

          {/* Use generic container to control styles */}
          <ModalOptions>
            <button className="ModalOptions__button" onClick={this.onDismiss}>Close</button>
            <button className="ModalOptions__button ModalOptions__button--primary" onClick={this.onSignUp}>Sign Up</button>
          </ModalOptions>
        </div>
      </Modal>
    );
  }
}

export default MailingList; 