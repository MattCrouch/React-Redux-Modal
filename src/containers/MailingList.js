// Import components
import { connect } from 'react-redux';
import MailingList from '../components/MailingList';

// Import sign up action for mailing list
import { signUp } from '../modules/mailingList/actions';

// Create signUp function to dispatch actions
function mapDispatchToProps(dispatch, ownProps) {
  return {
    signUp: (emailAddress) => {
      dispatch(signUp(emailAddress));
      ownProps.hideModal();
    },
  }
}

// Connect component to Redux
export default connect(undefined, mapDispatchToProps)(MailingList);