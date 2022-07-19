/* eslint-disable no-console */
import httpCommon from '../../api';
import { showErrorToast, showsInfoToast, showSuccessToast } from '../../shared/toast';
import motorActionTypes from '../types/motorcyles';

export const fetchMotorcyclesStart = () => ({
  type: motorActionTypes.FETCH_MOTORCYCLES_START,
});

export const fetchMotorcyclesSuccess = (payload) => ({
  type: motorActionTypes.FETCH_MOTORCYCLES_SUCCESS,
  payload,
});

export const fetchMotorcyclesError = (payload) => ({
  type: motorActionTypes.FETCH_MOTORCYCLES_ERROR,
  payload,
});

export const fetchMotorCyclesAsync = () => async (dispatch) => {
  try {
    dispatch(fetchMotorcyclesStart());
    const res = await httpCommon().get('/motorcycles');
    dispatch(fetchMotorcyclesSuccess(res?.data));
  } catch (err) {
    dispatch(fetchMotorcyclesError(err?.message));
  }
};

export const addMotorcycleAsync = (user, token, toast) => async (dispatch) => {
  try {
    showsInfoToast('Saving....', toast);
    await httpCommon(token).post('/motorcycle', user);
    showSuccessToast('Bicycle added successfully', toast);
    dispatch(fetchMotorCyclesAsync());
  } catch (err) {
    console.log(err);
    showErrorToast(err, toast);
  }
};

/* individual motorcycle */

export const fetchMotorcycleStart = () => ({
  type: motorActionTypes.FETCH_MOTORCYCLE_START,
});

export const fetchMotorcycleSuccess = (payload) => ({
  type: motorActionTypes.FETCH_MOTORCYCLE_SUCCESS,
  payload,
});

export const fetchMotorcycleError = (payload) => ({
  type: motorActionTypes.FETCH_MOTORCYCLE_ERROR,
  payload,
});

export const fetchMotorCycleAsync = (id) => async (dispatch) => {
  try {
    dispatch(fetchMotorcycleStart());
    const res = await httpCommon().get(`/motorcycle/${id}`);
    dispatch(fetchMotorcycleSuccess(res?.data));
  } catch (err) {
    dispatch(fetchMotorcycleError(err?.message));
  }
};
