import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reports from './reports';
import auth from './auth';

export default combineReducers({
  form: formReducer,
  reports,
  auth
});