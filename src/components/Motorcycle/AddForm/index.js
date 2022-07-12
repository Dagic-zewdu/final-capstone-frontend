/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../styles/index.css';
// eslint-disable-next-line import/order
import { generate } from 'randomized-string';
import Carousel from 'react-multi-carousel';
import Navigation from '../../Navigation';
import responsive from '../../../utils/responsive';

function AddMotorCycle() {
  const [state, setState] = useState({
    model: '', // required
    price: 0, // required
    title: '', // required
    images: [], // required at leat one image
    duration: '', // required
    discount: '', // optional
    description: '',
    image: '',
  });
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
  };
  const removeImage = (id) => setState((s) => ({
    ...s,
    images: s.images.filter(({ id: Id }) => id !== Id),
  }));
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
                <FloatingLabel controlId="description" label="Description" className="w-100 mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="description"
                    id="description"
                    style={{ height: '200px' }}
                  />
                </FloatingLabel>
                <div className="d-flex align-items-center">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Add image url"
                    className="mb-3 w-75"
                  >
                    <Form.Control
                      type="text"
                      onChange={(e) => setState((s) => (
                        {
                          ...s,
                          image: e.target.value,
                        }))}
                      id="images"
                      placeholder="Title"
                    />
                    <Button
                      variant="outline-warning"
                      onClick={() => setState((s) => ({
                        ...s,
                        images: [...s.images, {
                          id: generate({ charset: 'number' }),
                          image: s.image,
                        }],
                      }))}
                    >
                      + Add image
                    </Button>
                  </FloatingLabel>
                </div>
                <Carousel responsive={responsive([3, 2, 1])}>
                  {
                    state.images.map(({ image, id }) => (
                      <div className="img-cont" key={id}>
                        <img src={image} alt="Snow" className="w-100" />
                        <Button
                          variant="outline-warning"
                          className="top-right fa-2x"
                          onClick={() => removeImage(id)}
                        >
                          &times;
                        </Button>
                      </div>
                    ))
                 }
                </Carousel>
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
