import modal from './modal/reducer';
import mailingList from './mailingList/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  modal,
  mailingList,
});