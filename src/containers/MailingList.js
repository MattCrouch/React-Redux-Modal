import { connect } from 'react-redux';
import MailingList from '../components/MailingList';
import { signUp } from '../modules/mailingList/actions';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signUp: (emailAddress) => {
      dispatch(signUp(emailAddress));
      ownProps.hideModal();
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailingList);