import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalSummoner from '../components/ModalSummoner';
import { showModal } from '../modules/modal/actions';


function mapStateToProps(state) {
  return {
    currentModal: state.modal[state.modal.length - 1],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: () => { dispatch(showModal('INFO', { title: 'This is an info window!', message: 'This is some text. It is wonderful.' })) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSummoner);