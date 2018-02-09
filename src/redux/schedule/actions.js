import axios from 'axios';

import {
  FETCH_CURRENT_CLASS,
  FETCH_CURRENT_CLASS_SUCCESS,
  FETCH_CURRENT_CLASS_FAIL
} from './types';

export const getClasses = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_CURRENT_CLASS });
  try {
    const { data } = await axios({
      method: 'get',
      url: `/schedule/currentclass`,
      headers: {
        Authorization: `${getState().auth.user.token}`
      }
    });
    console.log(JSON.stringify(data, undefined, 2));
    dispatch({ type: FETCH_CURRENT_CLASS_SUCCESS, classes: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_CURRENT_CLASS_FAIL, error: err.message });
  }
};
