import usersActions from '../types/users';

const initialState = {
  loading: true,
  data: [],
  error: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case usersActions.FETCH_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case usersActions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case usersActions.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
