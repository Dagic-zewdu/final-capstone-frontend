import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMotorCycleAsync } from '../../../Redux/actions/motorcycle';
import AllContainer from '../../Shared/AllContainer';

function MotorCycleDetails() {
  const { id } = useParams();
  const {
    createdBy, data, loading, error,
  } = useSelector((state) => state.motorcycle.motorcycle);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.id !== id) {
      dispatch(fetchMotorCycleAsync(id));
    }
  }, [id]);
  return (
    <AllContainer navigation={false}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Link to="/">
              <h1 className="font-italic logo display-4">Bcycom</h1>
              <div className="mt-3">
                <img src="" alt="" />
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
