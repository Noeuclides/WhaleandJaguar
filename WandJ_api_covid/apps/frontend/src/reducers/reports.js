import _ from 'lodash';
import { GET_DAILY_REPORT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DAILY_REPORT:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};