import _ from 'lodash';
import { GET_DAILY_REPORT, GET_COUNTRY_REPORT, GET_COUNTRY_DAILY_REPORT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DAILY_REPORT:
      return {
        ...action.payload
      };
    case GET_COUNTRY_REPORT:
      return {
        ...action.payload
      };
    case GET_COUNTRY_DAILY_REPORT:
      return {
        ...action.payload
      };
    default:
    return state;
  }
};