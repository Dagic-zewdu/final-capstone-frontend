/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addReservation, editReservation } from '../../Redux/actions/reservation';
import './styles/index.css';

function AddReservation({
  show, showReservation, cycle, edit = false, reservation,
}) {
  const [state, setState] = useState({
    phone: '',
  });
  useEffect(() => {
    if (edit) setState((s) => ({ ...s, phone: reservation?.phone ? reservation?.phone : '' }));
  }, [edit, reservation?.phone]);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { token } = useSelector((state) => state.account);
  const handleChange = (e) => setState((s) => ({
    ...s, [e.target.id]: e.target.value,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      dispatch(addReservation({
        motorcycle_id: cycle?.id,
        phone: state.phone,
      }, token, addToast, showReservation));
    } else {
      dispatch(editReservation(reservation?.id, {
        motorcycle_id: cycle?.id,
        phone: state.phone,
      }, token, addToast, showReservation));
    }
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);
  return (
    <div id="myNav" className="overlay" style={{ height: show ? '100%' : '0%' }}>
      <Button
        className="closebtn mt-4 fs-3 border-0 text-light fw-bolder"
        variant="outline-dark"
        onClick={() => showReservation(false)}
      >
        X Close
      </Button>
      <div className="overlay-content">
        <h5>{cycle?.title}</h5>
        <h4 className="mt-3">{cycle?.description}</h4>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center mb-3 mt-3 justify-content-around w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Drop your phone"
              className="w-75 mr-10"
            >
              <Form.Control type="text" value={state.phone} required={edit} onChange={handleChange} id="phone" placeholder="Phone" />
            </FloatingLabel>
            <Button
              variant="outline-success"
              type="submit"
              className="w-25"
            >
              {!edit ? 'Reserve' : 'Update'}
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddReservation;
