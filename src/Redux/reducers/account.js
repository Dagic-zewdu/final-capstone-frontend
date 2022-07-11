import usersActions from '../types/users';

const initialState = {
  loading: true,
  data: null,
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
        data: payload,
        error: false,
      };
    case usersActions.FETCH_USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default accountReducer;
