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
        className="closebtn mt-4 fs-4 border-0 text-light fw-bolder rounded-circle bg-danger"
        variant="outline-primary"
        style={{ fontFamily: "'Rubik', sans-serif" }}
        onClick={() => showReservation(false)}
      >
        X
      </Button>
      <div className="overlay-content">
        <h5 className='title fw-bolder mt-2'>{cycle?.title}</h5>
        <h4 className="mt-3 desc fw-bolder mt-2">{cycle?.description}</h4>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center mb-3 fixed-bottom container mt-5 justify-content-between w-100">
            <FloatingLabel
              controlId="floatingInput"
              label="Drop your phone"
              className="w-75 mr-10 form-label fw-bolder"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              <Form.Control type="text" value={state.phone} class="p-4" required={edit} onChange={handleChange} id="phone" placeholder="Phone" />
            </FloatingLabel>
            <Button
              variant="outline-light"
              type="submit"
              className="w-25 btn-reserve fw-bolder border-2 p-1"
            >
              {!edit ? '+ Reserve' : '+ Update'}
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddReservation;
