import motorActionTypes from '../types/motorcyles';

const initialState = {
  loading: true,
  data: [],
  error: false,
};

const motorcycleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case motorActionTypes.FETCH_MOTORCYCLES_START:
      return {
        ...state,
        loading: true,
      };
    case motorActionTypes.FETCH_MOTORCYCLES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case motorActionTypes.FETCH_MOTORCYCLES_ERROR:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default: return state;
  }
};

export default motorcycleReducer;
