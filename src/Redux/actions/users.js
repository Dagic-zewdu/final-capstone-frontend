import httpCommon from '../../api';
import usersActions from '../types/users';

export const fetchUsersStart = () => ({
  type: usersActions.FETCH_USERS_START,
});

export const fetchUsersSuccess = (payload) => ({
  type: usersActions.FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersError = (payload) => ({
  type: usersActions.FETCH_USERS_ERROR,
  payload,
});

export const fetchUsersAsync = () => async (dispatch) => {
  try {
    dispatch(fetchUsersStart());
    const res = await httpCommon().get('/users');
    dispatch(fetchUsersSuccess(res?.data));
  } catch (err) {
    dispatch(fetchUsersError(err.message));
  }
};
