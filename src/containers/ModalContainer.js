import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { hideModal } from '../modules/modal/actions';
import Info from '../components/Info';

const MODAL_COMPONENTS = {
  INFO: Info,
}

class ModalContainer extends Component {
  render() {
    if(!this.props.currentModal || !MODAL_COMPONENTS[this.props.currentModal.type]) {
      return null;
    }
    
    const SpecificModal = MODAL_COMPONENTS[this.props.currentModal.type];

    return <SpecificModal {...this.props} {...this.props.currentModal.props} />
  }
}

function mapStateToProps(state) {
  return {
    currentModal: state.modal[state.modal.length - 1],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(hideModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);