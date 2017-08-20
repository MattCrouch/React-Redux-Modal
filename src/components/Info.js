import React, { Component } from 'react';
import Modal from './Modal';
import ModalOptions from './ModalOptions';

import './Info.css';

class Info extends Component {
  constructor() {
    super();

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(e) {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal {...this.props}>
        <div className="Info">
          <div className="Info__body">
            <h2 className="Info__title">
              {this.props.title}
            </h2>
            <div className="Info__message">
              {this.props.message}
            </div>
          </div>
          <ModalOptions>
            <button className="ModalOptions__button ModalOptions__button--primary" onClick={this.onDismiss}>Dismiss</button>
          </ModalOptions>
        </div>
      </Modal>
    );
  }
}

export default Info;