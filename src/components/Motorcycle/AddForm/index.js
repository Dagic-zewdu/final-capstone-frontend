/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import '../styles/index.css';
// eslint-disable-next-line import/order
import { generate } from 'randomized-string';
import Carousel from 'react-multi-carousel';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import responsive from '../../../utils/responsive';
import { showErrorToast } from '../../../shared/toast';
import { addMotorcycleAsync } from '../../../Redux/actions/motorcycle';
import AllContainer from '../../Shared/AllContainer';

function AddMotorCycle() {
  const [state, setState] = useState({
    model: '', // required
    price: 0, // required
    title: '', // required
    images: [], // required at leat one image
    duration: '', // required
    discount: 0, // optional
    description: '',
    image: '',
    cylinder: '',
    acceleration: '',
  });
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.account);
  const ref = useRef(null);
  const handleChange = (e) => {
    setState((s) => ({
      ...s,
      [e.target.id]: e.target.value,
    }));
  };
  const removeImage = (id) => setState((s) => ({
    ...s,
    images: s.images.filter(({ id: Id }) => id !== Id),
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.images.length) {
      let cycle = {};
      Object.keys(state).forEach((key) => {
        if (key === 'images') {
          cycle = { ...cycle, images: state.images.map(({ image }) => (image)) };
        } else if (key !== 'image') { cycle = { ...cycle, [key]: state[key] }; }
      });
      dispatch(addMotorcycleAsync(cycle, token, addToast));
    } else {
      showErrorToast('Please add at least one image link', addToast);
      ref.current.focus();
    }
  };

  return (
    <AllContainer auth data={['s']}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">{' '}</div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="d-flex align-items-center flex-column justify-content-center">
                <h1 className="viral">
                  {' '}
                  Add Motorcycle
                  <FontAwesomeIcon icon={faMotorcycle} style={{ marginRight: 10 }} class="" />
                </h1>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Model"
                  className="mb-3 mt-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="text" onChange={handleChange} required id="model" placeholder="Model" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Cylinder"
                  className="mb-3 mt-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="number" onChange={handleChange} required id="cylinder" placeholder="Model" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Acceleration"
                  className="mb-3 mt-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="text" onChange={handleChange} required id="acceleration" placeholder="Model" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Title"
                  className="mb-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="text" onChange={handleChange} required id="title" placeholder="Title" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  className="mb-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="number" onChange={handleChange} required id="price" placeholder="Price" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Duration in years"
                  className="mb-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="number" onChange={handleChange} required id="duration" placeholder="Duration" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Discount by percent %"
                  className="mb-3 w-100 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  <Form.Control type="number" onChange={handleChange} id="discount" placeholder="Discount" />
                </FloatingLabel>
                <FloatingLabel controlId="description" label="Description" className="w-100 mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="description"
                    id="description"
                    class="fw-bolder"
                    onChange={handleChange}
                    style={{ height: '200px', fontFamily: "'Rubik', sans-serif" }}
                  />
                </FloatingLabel>
                <div className="d-flex align-items-center w-100 justify-content-between">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Add image url"
                    className="w-75 fw-bolder"
                    style={{ fontFamily: "'Rubik', sans-serif" }}
                  >
                    <Form.Control
                      ref={ref}
                      type="text"
                      onChange={(e) => (setState((s) => (
                        {
                          ...s,
                          image: e.target.value,
                        })))}
                      id="images"
                      value={state.image}
                      placeholder="image"
                      style={{ fontFamily: "'Rubik', sans-serif" }}
                    />
                  </FloatingLabel>
                  <Button
                    variant="outline-info fw-bolder"
                    style={{ fontFamily: "'Rubik', sans-serif" }}
                    class="btn-lg p-3"
                    onClick={() => (state.image
                      ? !(state.images.find(({ image }) => image === state.image))
                        ? setState((s) => ({
                          ...s,
                          images: [...s.images, {
                            id: generate({ charset: 'number' }),
                            image: s.image,
                          }],
                          image: '',
                        }))
                        : showErrorToast('Please add another image link', addToast)
                      : showErrorToast('Please add image link', addToast))}
                  >
                    + Add image
                  </Button>
                </div>
                <div className="row w-100 mt-4">
                  <Carousel
                    keyBoardControl
                    className="w-100"
                    itemClass="mr-10"
                    responsive={responsive([3, 2, 1])}
                  >
                    {
                    state.images.map(({ image, id }) => (
                      <div
                        className="col-lg-12 w-100"
                        key={id}
                        style={{ marginRight: 10 }}
                      >
                        <div className="card w-100">
                          <img
                            src={image}
                            alt="Snow"
                            className="w-100"
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          <Button
                            type="button"
                            variant="outline-danger"
                            className="fa-2x fw-bolder"
                            style={{ fontFamily: "'Rubik', sans-serif" }}
                            onClick={() => removeImage(id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))
                 }
                  </Carousel>
                </div>
                <Button
                  variant="outline-success"
                  type="submit"
                  className="w-100 mt-4 fw-bolder"
                  style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                  + Add Motorcycle
                </Button>
              </div>
            </form>
          </div>
          <div className="col-lg-3">{' '}</div>
        </div>
      </div>
    </AllContainer>
  );
}

export default AddMotorCycle;
