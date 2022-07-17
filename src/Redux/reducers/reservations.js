import ReservationActionType from '../types/reservations';

const initialState = {
  loading: true,
  data: [],
  error: false,
  reservation: {
    loading: true,
    data: null,
    createdBy: null,
    reservations: 0,
    motorcycle: null,
    error: false,
  },
};

const reservationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ReservationActionType.FETCH_RESERVATIONS_START:
      return {
        ...state,
        loading: true,
      };
    case ReservationActionType.FETCH_RESERVATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case ReservationActionType.FETCH_RESERVATION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default: return state;
  }
};

export default reservationReducer;
