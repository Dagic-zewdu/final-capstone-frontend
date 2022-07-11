import httpCommon from '../../api';
import usersActions from '../types/users';

export const fetchAccountStart = () => ({
  type: usersActions.FETCH_USER_START,
});

export const fetchAccountSuccess = (payload) => ({
  type: usersActions.FETCH_USER_SUCCESS,
  payload,
});

export const fetchAccountError = (payload) => ({
  type: usersActions.FETCH_USER_ERROR,
  payload,
});
export const setToken = (payload) => ({
  type: usersActions.SET_TOKEN,
  payload,
});
export const fetchCurrentAccount = (token) => async (dispatch) => {
  try {
    const res = await httpCommon(token).get('/auto_login');
    dispatch(fetchAccountSuccess(res?.data));
  } catch (err) {
    dispatch(fetchAccountError(err?.message));
  }
};
