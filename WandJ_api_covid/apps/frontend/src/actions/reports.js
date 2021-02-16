import axios from 'axios';
import { GET_DAILY_REPORT } from './types';
import { tokenConfig } from './auth';

// GET TODOS
export const getReport = (params) => async (dispatch,getState) => {
  console.log(`FORM SUMBIMIT report!! ${JSON.stringify(params)}`);
  const res = await axios.get('/covid_api/daily', { params: params  }, tokenConfig(getState));
  { console.log(`repots!!  ${JSON.stringify(res)}`) };
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// ADD TODO
export const getParams = formValues => async dispatch => {
    console.log(`FORM SUMBIMIT action ${JSON.stringify(formValues)}`)
    dispatch(getReport({ date: formValues.date }))
  // const res = await axios.get('/covid_api/daily', { params: { date: formValues.task } });
  // dispatch({
  //   type: GET_DAILY_REPORT,
  //   payload: res.data
  // });
  // dispatch(reset('ReportForm'));
};
