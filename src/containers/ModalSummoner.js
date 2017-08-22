// Import components
import { connect } from 'react-redux';
import ModalSummoner from '../components/ModalSummoner';

// Import action to show modal
import { showModal } from '../modules/modal/actions';

// Check if a modal is currently showing
function mapStateToProps(state) {
  return {
    modalShowing: state.modal.modals.length > 0,
  }
}

// Create functions that will dispatch actions to show modals
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

// Connect to Redux
export default connect(mapStateToProps, mapDispatchToProps)(ModalSummoner);