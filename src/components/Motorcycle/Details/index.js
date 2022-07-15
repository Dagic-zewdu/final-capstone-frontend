import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMotorCycleAsync } from '../../../Redux/actions/motorcycle';
import responsive from '../../../utils/responsive';
import AllContainer from '../../Shared/AllContainer';

function MotorCycleDetails() {
  const { id } = useParams();
  const {
    createdBy, data, loading, error,
  } = useSelector((state) => state.motorcycle?.motorcycle);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.id !== id) {
      dispatch(fetchMotorCycleAsync(id));
    }
  }, [id]);
  const [image, setImage] = useState(data?.image[0]);
  return (
    <AllContainer navigation={false} loading={loading} error={error}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Link to="/">
              <h1 className="font-italic logo display-4">Bcycom</h1>
              <div className="mt-3">
                <img src={image} alt="" style={{ width: '100%' }} />
              </div>
              <div className="mt-3">
                <div className="row">
                  <Carousel
                    className="w-100"
                    keyBoardControl
                    itemClass="mr-10"
                    responsive={responsive([5, 3, 2])}
                  />
                  {
                    data?.images.filter((i) => i !== image)
                      .map((i) => (
                        <Card.Img
                          key={i}
                          src={i}
                          className={i === image ? 'bodered' : ''}
                          onClick={() => setImage(i)}
                        />
                      ))
                  }
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg--3" />
        </div>
      </div>
    </AllContainer>
  );
}

export default MotorCycleDetails;
