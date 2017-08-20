import React, { Component } from 'react';
import Modal from './Modal';
import ModalOptions from './ModalOptions';

import EmailIcon from '../email.svg';
import './MailingList.css';

class MailingList extends Component {
  constructor() {
    super();

    this.state = {
      emailAddress: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onChange(e) {
    this.setState({
      emailAddress: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state.emailAddress);
  }

  onSignUp() {
    // Need to submit on another button to use native form validation
    this.formSubmit.click();
  }

  onDismiss(e) {
    this.props.closeModal();
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
                  <input type="submit" value="Sign Up" style={{ display: 'none' }} ref={formSubmit => this.formSubmit = formSubmit } />
                </form>
              </div>
            </div>
          </div>

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