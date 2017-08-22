// Import reducers
import modal from './modal/reducer';
import mailingList from './mailingList/reducer';
import { combineReducers } from 'redux';

// Combine reducers into one for Redux
export default combineReducers({
  modal,
  mailingList,
});