import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reports from './reports';
import auth from './auth';
import { LOGOUT_SUCCESS } from '../actions/types'; 

// export default combineReducers({
//   form: formReducer,
//   reports,
//   auth
// });

const appReducer = combineReducers({
  form: formReducer,
  reports,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;