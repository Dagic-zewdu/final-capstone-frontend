import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Navigation from '../../Navigation';
import '../styles/index.css';

function AddMotorCycle() {
  const [state, setState] = useState({
    model: '', // required
    price: 0, // required
    title: '', // required
    images: [], // required at leat one image
    duration: '', // required
    discount: '', // optional
    description: '',
  });
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
  };
  const removeImage = ({ id }) => {

  };
  return (
    <Navigation>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">{' '}</div>
          <div className="col-lg-6">
            <form action="">
              <div className="d-flex align-items-center flex-column justify-content-center">
                <h1 className="viral">
                  {' '}
                  Add Motorcycle
                  <FontAwesomeIcon icon={faMotorcycle} style={{ marginRight: 10 }} />
                </h1>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Model"
                  className="mb-3 mt-3 w-100"
                >
                  <Form.Control type="text" id="model" placeholder="Model" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Title"
                  className="mb-3 w-100"
                >
                  <Form.Control type="text" id="title" placeholder="Title" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  className="mb-3 w-100"
                >
                  <Form.Control type="number" id="price" placeholder="Price" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Duration in years"
                  className="mb-3 w-100"
                >
                  <Form.Control type="number" id="duration" placeholder="Duration" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Discount by percent %"
                  className="mb-3 w-100"
                >
                  <Form.Control type="number" id="discount" placeholder="Discount" />
                </FloatingLabel>
                <FloatingLabel controlId="description" label="Description" className="w-100">
                  <Form.Control
                    as="textarea"
                    placeholder="description"
                    id="description"
                    style={{ height: '200px' }}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Add image url"
                  className="mb-3 w-100"
                >
                  <Form.Control
                    type="text"
                    onChange={(e) => setState((s) => (
                      {
                        ...s,
                        images: [...s.images, {id:,image:e.target.value}],
                      }))}
                    id="title"
                    placeholder="Title"
                  />
                </FloatingLabel>
                {
                    state.images((image) => (
                      <div className="img-cont">
                        <img src={image} alt="Snow" className="w-100" />
                        <div className="top-right fa-2x">&times;</div>
                      </div>
                    ))
}
              </div>
            </form>
          </div>
          <div className="col-lg-3">{' '}</div>
        </div>
      </div>
    </Navigation>
  );
}

export default AddMotorCycle;
