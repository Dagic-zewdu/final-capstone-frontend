/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import responsive from '../../utils/responsive';
import UserTemplate from '../Shared/UserTemplate';

function MotorCycleCard({ key, cycle, currentUser }) {
  const [body, showBody] = useState(false);

  return (
    <div
      className="col-lg-4"
      key={key}
      style={{ minHeight: '350px' }}
      onMouseOver={() => showBody(true)}
      onMouseLeave={() => showBody(false)}
    >
      <div className="card rounded w-100" style={{ height: '100%' }}>
        <Card style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Carousel
            autoPlay
            showDots
            keyBoardControl
            className="w-100"
            responsive={responsive([1, 1, 1])}
          >
            <Card.Img
              src="https://st.depositphotos.com/1068095/5153/i/600/depositphotos_51533337-stock-photo-motorbike-racing.jpg"
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Img
              src="https://st.depositphotos.com/1068095/5153/i/600/depositphotos_51533337-stock-photo-motorbike-racing.jpg"
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Img
              src="https://st.depositphotos.com/1068095/5153/i/600/depositphotos_51533337-stock-photo-motorbike-racing.jpg"
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Img
              src="https://st.depositphotos.com/1068095/5153/i/600/depositphotos_51533337-stock-photo-motorbike-racing.jpg"
              style={{ height: '350px', objectFit: 'cover' }}
            />
          </Carousel>
          <Card.Body
            className="p-0 w-100"
            style={{
              position: 'absolute',
              backgroundColor: '#111',
              color: '#fff',
              bottom: 0,
              opacity: 0.75,
              display: body ? 'block' : 'none',
              transition: '1s ease',
            }}
          >
            <h3 className="text-center mb-0">Vespas</h3>
            <p className="text-center mb-0">model</p>
            <div
              className="d-flex justify-content-between align-items-center w-100 py-1 px-1"
            >
              <div className="d-flex flex-column justify-content-center">
                <p>Can last up to 8 years</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <p className="bolder">$ 1200</p>
              </div>
            </div>
          </Card.Body>

        </Card>
      </div>
    </div>
  );
}

export default MotorCycleCard;
