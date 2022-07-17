/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './styles/index.css';

function AddReservation({ show, showReservation, cycle }) {
  const [state, setState] = useState({
    phone: '',
  });
  const handleChange = (e) => setState((s) => ({
    ...s, [e.target.id]: e.target.value,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="myNav" className="overlay" style={{ height: show ? '100%' : '0%' }}>
      <Button className="closebtn" onClick={() => showReservation(false)}>&times;</Button>
      <div className="overlay-content">
        <h1>{cycle.title}</h1>
        <h4 className="mt-3">{cycle.description}</h4>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center justify-content-around">
            <FloatingLabel
              controlId="floatingInput"
              label="Please drop your  phone"
              className="w-75"
            >
              <Form.Control type="text" value={state.phone} onChange={handleChange} id="phone" placeholder="Phone" />
            </FloatingLabel>
            <Button
              variant="outline-success"
              type="submit"
            >
              Submit
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddReservation;
