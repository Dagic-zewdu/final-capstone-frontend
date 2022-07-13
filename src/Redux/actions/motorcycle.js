import httpCommon from '../../api';
import { showSuccessToast } from '../../shared/toast';
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

export const fetchMotorCycleAsync = () => async (dispatch) => {
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
    await httpCommon(token).post('/motorcycle', user);
    showSuccessToast('Bicycle added successfully', toast);
    dispatch(fetchMotorCycleAsync());
  } catch (err) {
    dispatch(fetchMotorcyclesError(err?.message));
  }
};
