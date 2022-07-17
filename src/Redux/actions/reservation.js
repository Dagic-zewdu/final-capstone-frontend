import httpCommon from '../../api';
import ReservationActionType from '../types/reservations';

export const fetchReservationsStart = () => ({
  type: ReservationActionType.FETCH_RESERVATIONS_START,
});

export const fetchReservationsSuccess = (payload) => ({
  type: ReservationActionType.FETCH_RESERVATIONS_SUCCESS,
  payload,
});

export const fetchReservationsError = (payload) => ({
  type: ReservationActionType.FETCH_RESERVATIONS_ERROR,
  payload,
});

export const fetchReservationsAsync = () => async (dispatch) => {
  try {
    dispatch(fetchReservationsStart());
    const res = await httpCommon().get('/reservations');
    dispatch(fetchReservationsSuccess(res?.data));
  } catch (err) {
    dispatch(fetchReservationsError(err?.message));
  }
};

export const addReservation = (reservation, token) => async (dispatch) => {
  try {
    await httpCommon(token).post('reservation', reservation);
    dispatch(fetchReservationsAsync());
  } catch (err) {
    dispatch(fetchReservationsError(err?.message));
  }
};
