import { connect } from 'react-redux';
import ModalSummoner from '../components/ModalSummoner';
import { showModal } from '../modules/modal/actions';

function mapStateToProps(state) {
  return {
    modalShowing: state.modal.modals.length > 0,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showMailingListModal: () => {
      dispatch(
        showModal('MAILING_LIST')
      )
    },
    showInfoModal: () => {
      dispatch(
        showModal(
          'INFO',
          {
            title: 'This is an info window!',
            message: 'The body text of this box is fully customisable. The data is just passed in as props.'
          }
        )
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSummoner);