import motorActionTypes from '../types/motorcyles';

const initialState = {
  loading: true,
  data: [],
  error: false,
  motorcycle: {
    loading: true,
    data: null,
    created_by: null,
    error: false,
  },
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
        error: payload,
      };
    case motorActionTypes.FETCH_MOTORCYCLE_START:
      return {
        ...state,
        motorcycle: {
          ...state.motorcycle,
          loading: true,
          error: false,
        },
      };
    case motorActionTypes.FETCH_MOTORCYCLE_SUCCESS:
      return {
        ...state,
        motorcycle: {
          ...state.motorcycle,
          loading: false,
          data: payload.motorcycle,
          created_by: payload.created_by,
          error: false,
        },
      };
    case motorActionTypes.FETCH_MOTORCYCLE_ERROR:
      return {
        ...state,
        motorcycle: {
          ...state.motorcycle,
          loading: false,
          error: payload,
        },
      };
    default: return state;
  }
};

export default motorcycleReducer;
