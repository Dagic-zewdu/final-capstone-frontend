import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMotorCycleAsync } from '../../../Redux/actions/motorcycle';
import responsive from '../../../utils/responsive';
import AllContainer from '../../Shared/AllContainer';
import UserTemplate from '../../Shared/UserTemplate';
import '../styles/index.css';

function MotorCycleDetails() {
  const { id } = useParams();
  const {
    data, loading, error, createdBy,
  } = useSelector((state) => state.motorcycles?.motorcycle);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.id !== id) {
      dispatch(fetchMotorCycleAsync(id));
    }
  }, [id]);
  const [image, setImage] = useState(data?.images[0]);
  useEffect(() => setImage(data?.images[0]), [data?.images]);
  return (
    <AllContainer navigation={false} loading={loading} error={error} data={['1']}>
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
              </div>
              <Table>
                <thead>
                  <tr>
                    <th className="align-middle detail-content">Title</th>
                    <th className="align-middle detail-content">{data?.title}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Model</th>
                    <th className="align-middle detail-content">{data?.model}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Acceleration</th>
                    <th className="align-middle detail-content">{data?.acceleration}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Cylinder</th>
                    <th className="align-middle detail-content">{data?.cylinder}</th>
                  </tr>
                  <tr>
                    <th className="align-middle detail-content">Price</th>
                    <th className="align-middle detail-content">{data?.price}</th>
                  </tr>
                </thead>
              </Table>
              <Button variant="outline-warning" style={{ fontFamily: "'Rubik', sans-serif" }}>
                <span class="fs-4 fw-bolder">+ Reserve</span>

              </Button>
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
                        className={i === image ? 'border border-info' : ''}
                        onClick={() => setImage(i)}
                      />
                    ))
                      : <div className="" />
                   }
                </Carousel>
              </div>
            </div>
          </div>

          <div className="col-lg-12 w-100 d-flex justify-content-center">
            <h4 className="mt-3 logo">{data?.title}</h4>
            <div className="mt-2 wrap">{data?.description}</div>
          </div>
        </div>
      </div>
    </AllContainer>
  );
}

export default MotorCycleDetails;
