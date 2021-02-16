import axios from 'axios';
import { GET_DAILY_REPORT } from './types';
import { tokenConfig } from './auth';

// GET REPORT
export const getReport = (params) => async (dispatch,getState) => {
  console.log(`FORM SUMBIMIT report!! ${JSON.stringify(params)}`);
  const res = await axios.get('/covid_api/daily', { params: params  }, tokenConfig(getState));
  { console.log(`repots!!  ${JSON.stringify(res)}`) };
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// GET PARAMS
export const getParams = formValues => async dispatch => {
    console.log(`FORM SUMBIMIT action ${JSON.stringify(formValues)}`)
    dispatch(getReport({ date: formValues.date }))
};

export const getCountryReport = (params) => async (dispatch,getState) => {
  console.log(`FORM SUMBIMIT report!! ${JSON.stringify(params)}`);
  const res = await axios.get('/covid_api/country', { params: params  }, tokenConfig(getState));
  { console.log(`repots!!  ${JSON.stringify(res)}`) };
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// GET CODE PARAMS
export const getCodeParams = formValues => async dispatch => {
    console.log(`FORM SUMBIMIT action ${JSON.stringify(formValues)}`)
    dispatch(getCountryReport({ code: formValues.code }))
};

export const getCountryDailyReport = (params) => async (dispatch,getState) => {
  console.log(`FORM SUMBIMIT report!! ${JSON.stringify(params)}`);
  const res = await axios.get('/covid_api/country_daily', { params: params  }, tokenConfig(getState));
  { console.log(`repots!!  ${JSON.stringify(res)}`) };
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// GET CODE PARAMS
export const getCodeDateParams = formValues => async dispatch => {
    console.log(`FORM SUMBIMIT action ${JSON.stringify(formValues)}`)
    dispatch(getCountryDailyReport({ code: formValues.code, date: formValues.date }))
};