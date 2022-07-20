/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import {
  Button, Card, Spinner, Table,
} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import { useToasts } from 'react-toast-notifications';
import { fetchMotorCycleAsync } from '../../../Redux/actions/motorcycle';
import { cancelReservation, fetchReservationsAsync } from '../../../Redux/actions/reservation';
import responsive from '../../../utils/responsive';
import AddReservation from '../../Reservation/AddReservation';
import AllContainer from '../../Shared/AllContainer';
import UserTemplate from '../../Shared/UserTemplate';
import '../styles/index.css';

function MotorCycleDetails() {
  const { id } = useParams();
  const {
    data, loading, error, createdBy, reservations,
  } = useSelector((state) => state.motorcycles?.motorcycle);
  const { currentUser, loading: userLoading, token } = useSelector((state) => state.account);
  const [reserved, setReserved] = useState(false);
  const {
    data: Reservations,
    loading: reservationLoading,
  } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [show, showReservation] = useState(false);
  useEffect(() => {
    if (data?.id !== id) {
      dispatch(fetchMotorCycleAsync(id));
    }
  }, [id]);
  useEffect(() => {
    if (!Reservations.length) { dispatch(fetchReservationsAsync()); }
  }, []);
  const [image, setImage] = useState(data?.images[0]);
  useEffect(() => setImage(data?.images[0]), [data?.images]);
  useEffect(() => {
    const reserved = Reservations.find((r) => (r?.user_id.toString() === currentUser?.id.toString())
    && (r.motorcycle_id.toString() === id.toString()));
    setReserved(reserved);
  }, [Reservations, data]);
  return (
    <AllContainer navigation={false} loading={loading && reservationLoading} error={error} data={['1']}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Link to="/">
              <h1 className="font-italic logo display-4 text-dark">Bcycom</h1>
            </Link>
            <div className="mt-4">
              <img src={image} alt="" className="w-100" />
            </div>

          </div>
          <div className="col-lg-3" style={{ height: '100vh' }}>
            <div className="flex-column justify-content-around d-flex align-items-center w-100" style={{ height: '100%' }}>
              <div className="d flex flex-column justify-content-start" style={{ fontFamily: "'Rubik', sans-serif" }}>
                <p className="info fw-bolder">Posted By</p>
                <UserTemplate user={createdBy} />
                <p>
                  {' '}
                  { new Date(data?.created_at).toUTCString().slice(0, 16)}
                </p>
                <p>
                  <ReactTimeAgo date={data?.created_at} locale="en-US" />
                </p>
              </div>
              <Table bordered>
                <thead>
                  <tr>
                    <th className="align-middle detail-content">Title</th>
                    <th className="align-middle detail-content fw-bolder text-uppercase">{data?.title}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Model</th>
                    <th className="align-middle detail-content fw-bolder">{data?.model}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Acceleration</th>
                    <th className="align-middle detail-content fw-bolder">{data?.acceleration}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Cylinder</th>
                    <th className="align-middle detail-content fw-bolder">{data?.cylinder}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Price</th>
                    <th className="align-middle detail-content fw-bolder">{data?.price}</th>
                  </tr>
                </thead>
              </Table>
              {
                reservations
                  ? (
                    <h2 className="fs-2 fw-bolder" style={{ fontFamily: "'Rubik', sans-serif" }}>
                      {reservations}
                      {' '}
                      Reservations
                    </h2>
                  ) : ''
              }
              {
                userLoading
                  ? <Spinner animation="grow" />
                  : createdBy?.id !== currentUser?.id
                    ? reserved
                      ? (
                        <div className="">
                          <p>
                            Reserved
                            {' '}
                            {' '}
                            <ReactTimeAgo date={reserved?.created_at} locale="en-US" />
                          </p>
                          <Button
                            variant="outline-primary"
                            class="border rounded-pill"
                            style={{ fontFamily: "'Rubik', sans-serif" }}
                            onClick={() => dispatch(cancelReservation(reserved?.id,
                              token, addToast))}
                          >
                            <h4 className="fw-bolder fs-5 p-1">&times; Cancel Reservation</h4>

                          </Button>
                        </div>
                      )
                      : (
                        <Button variant="outline-primary" class="border rounded-pill" style={{ fontFamily: "'Rubik', sans-serif" }} onClick={() => showReservation(true)}>
                          <h4 className="fw-bolder fs-5 p-1">+ Reserve</h4>

                        </Button>
                      ) : ''
            }
              <div className="mt-3 w-100">
                <Carousel
                  className="w-100"
                  itemClass="mr-10"
                  responsive={responsive([3, 2, 1])}
                >
                  {
                    data ? data.images.map((i) => (
                      <Card.Img
                        key={i}
                        src={i}
                        style={{ objectFit: 'cover' }}
                        className={i === image ? 'border border-0 cursor' : ''}
                        onClick={() => setImage(i)}
                      />
                    ))
                      : <div className="" />
                   }
                </Carousel>
              </div>
            </div>
          </div>

          <div className="col-lg-12 w-100 d-flex justify-content-evenly mt-3 mb-2">
            <h4 className="mt-3 fs-2 text-uppercase fw-bolder m-3" style={{ fontFamily: "'Rubik', sans-serif" }}>{data?.title}</h4>
            <div className="mt-2 wrap fw-bolder text-secondary" style={{ fontFamily: "'Rubik', sans-serif" }}>{data?.description}</div>
          </div>
          <AddReservation
            cycle={data}
            show={show}
            showReservation={showReservation}
            createdBy={createdBy}
          />
        </div>
      </div>
    </AllContainer>
  );
}

export default MotorCycleDetails;
