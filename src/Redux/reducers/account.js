import usersActions from '../types/users';

const initialState = {
  loading: true,
  currentUser: null,
  token: null,
  error: false,
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
        token: null,
        currentUser: null,
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
