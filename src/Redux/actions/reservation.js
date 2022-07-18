/* eslint-disable no-console */
import httpCommon from '../../api';
import { showErrorToast, showsInfoToast, showSuccessToast } from '../../shared/toast';
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

export const addReservation = (reservation, token, toast) => async (dispatch) => {
  try {
    showsInfoToast('Saving....', toast);
    await httpCommon(token).post('reservation', reservation);
    showSuccessToast('Bicycle added successfully', toast);
    dispatch(fetchReservationsAsync());
  } catch (err) {
    console.log(err);
    showErrorToast(err, toast);
  }
};
/** reservation individual */
export const fetchReservationStart = () => ({
  type: ReservationActionType.FETCH_RESERVATION_START,
});

export const fetchReservationSuccess = (payload) => ({
  type: ReservationActionType.FETCH_RESERVATION_SUCCESS,
  payload,
});

export const fetchReservationError = (payload) => ({
  type: ReservationActionType.FETCH_RESERVATION_ERROR,
  payload,
});

export const fetchReservationAsync = (id) => async (dispatch) => {
  try {
    dispatch(fetchReservationStart());
    const res = await httpCommon().get(`/reservation/${id}`);
    dispatch(fetchReservationsSuccess(res?.data));
  } catch (err) {
    dispatch(fetchReservationsError(err?.message));
  }
};
