import axios from 'axios';
import { GET_DAILY_REPORT } from './types';
import { tokenConfig } from './auth';

// GET TODOS
export const getReport = () => async (dispatch,getState) => {
  const res = await axios.get('/covid_api/daily?date=2020-07-21', tokenConfig(getState));
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};