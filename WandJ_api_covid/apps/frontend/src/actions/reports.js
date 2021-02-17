import axios from 'axios';
import { GET_DAILY_REPORT } from './types';
import { tokenConfig } from './auth';

// GET REPORT
export const getReport = (params) => async (dispatch,getState) => {
  const res = await axios.get('/covid_api/daily', { params: params  }, tokenConfig(getState));
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// GET PARAMS
export const getParams = formValues => async dispatch => {
    dispatch(getReport({ date: formValues.date }))
};

export const getCountryReport = (params) => async (dispatch,getState) => {
  const res = await axios.get('/covid_api/country', { params: params  }, tokenConfig(getState));
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// GET CODE PARAMS
export const getCodeParams = formValues => async dispatch => {
    dispatch(getCountryReport({ code: formValues.code }))
};

export const getCountryDailyReport = (params) => async (dispatch,getState) => {
  const res = await axios.get('/covid_api/country_daily', { params: params  }, tokenConfig(getState));
  dispatch({
    type: GET_DAILY_REPORT,
    payload: res.data
  });
};

// GET CODE PARAMS
export const getCodeDateParams = formValues => async dispatch => {
    dispatch(getCountryDailyReport({ code: formValues.code, date: formValues.date }))
};