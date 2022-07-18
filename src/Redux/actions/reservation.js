/* eslint-disable no-console */
import httpCommon from '../../api';
import { showErrorToast, showsInfoToast, showSuccessToast } from '../../shared/toast';
import ReservationActionType from '../types/reservations';
import { fetchMotorCycleAsync } from './motorcycle';

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

export const addReservation = (reservation, token, toast, showReservation) => async (dispatch) => {
  try {
    showsInfoToast('Saving....', toast);
    await httpCommon(token).post('/reservation', reservation);
    showSuccessToast('Reservation added successfully', toast);
    dispatch(fetchMotorCycleAsync(reservation?.motorcycle_id));
    dispatch(fetchReservationsAsync());
    showReservation(false);
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

export const cancelReservation = (id, token, toast) => async (dispatch) => {
  try {
    showsInfoToast('canceling....', toast);
    await httpCommon(token).delete(`reservation/${id}`);
    showSuccessToast('Reservation canceled successfully', toast);
    dispatch(fetchReservationsAsync());
  } catch (err) {
    showErrorToast(err, toast);
  }
};

export const editReservation = (id, reservation, token,
  toast, showReservation) => async (dispatch) => {
  try {
    showsInfoToast('Updating....', toast);
    await httpCommon(token).put(`/reservation/${id}`, reservation);
    showSuccessToast('Reservation updated successfully', toast);
    dispatch(fetchMotorCycleAsync(reservation?.motorcycle_id));
    dispatch(fetchReservationsAsync());
    showReservation(false);
  } catch (err) {
    console.log(err);
    showErrorToast(err, toast);
  }
};
