import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hidingModal, hideModal } from '../modules/modal/actions';
import MailingList from '../containers/MailingList';
import Info from '../components/Info';

const MODAL_COMPONENTS = {
  MAILING_LIST: MailingList,
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
    currentModal: state.modal.modals[state.modal.modals.length - 1],
    hidingModal: state.modal.hiding,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal: () => {
      dispatch(hidingModal());

      setTimeout(() => {
        dispatch(hideModal());
      }, 200);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);