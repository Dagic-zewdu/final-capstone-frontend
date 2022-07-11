import usersActions from '../types/users';

const initialState = {
  loading: true,
  currentUser: null,
  error: false,
  token: null,
};

const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case usersActions.FETCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case usersActions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
        error: false,
      };
    case usersActions.FETCH_USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case usersActions.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
