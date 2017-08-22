// Import compnents
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MailingList from '../containers/MailingList';
import Info from '../components/Info';

// Import modal management actions for Redux
import { hidingModal, hideModal } from '../modules/modal/actions';

// List all modal components to match with value from Redux
const MODAL_COMPONENTS = {
  MAILING_LIST: MailingList,
  INFO: Info,
}

class ModalContainer extends Component {
  render() {
    // Don't render anything if we don't have a modal to show, or one we don't understand
    if(!this.props.currentModal || !MODAL_COMPONENTS[this.props.currentModal.type]) {
      return null;
    }
    
    const SpecificModal = MODAL_COMPONENTS[this.props.currentModal.type];

    // Pass all props through, including those provided through Redux
    return <SpecificModal {...this.props} {...this.props.currentModal.props} />
  }
}

// Get state of modal from Redux
function mapStateToProps(state) {
  return {
    currentModal: state.modal.modals[state.modal.modals.length - 1],
    hidingModal: state.modal.hiding,
  }
}

// Create function to hideModal after CSS transition
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

// Connect it to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);