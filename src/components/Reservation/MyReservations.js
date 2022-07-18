import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorCyclesAsync } from '../../Redux/actions/motorcycle';
import { fetchReservationsAsync } from '../../Redux/actions/reservation';
import AllContainer from '../Shared/AllContainer';

function MyReservations() {
  const { currentUser, loading: userLoading } = useSelector((state) => state.account);
  const { data, loading, error } = useSelector((state) => state.reservations);
  const {
    data: motorcycles,
    loading: motorCycleLoading,
  } = useSelector((state) => state.motorcycles);
  const [myReservations, setReservations] = useState([]);
  const dispatch = useDispatch();

  /** fetch data if data is empty */
  useEffect(() => {
    if (!data.length) { dispatch(fetchReservationsAsync()); }
    if (!motorcycles.length) { dispatch(fetchMotorCyclesAsync()); }
  }, []);

  useEffect(() => {
    if (!userLoading) {
      const myReservations = data.filter((reservation) => reservation?.user_id === currentUser?.id);
      setReservations(myReservations);
    }
  }, [data, currentUser]);
  const selectMotorcycle = (id) => motorcycles.find((motorcycle) => motorcycle?.id === id);
  return (
    <AllContainer
      auth
      loading={loading && motorCycleLoading}
      error={error}
      data={myReservations}
    >
      <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
        <Table className="w-100">
          <thead>
            <tr>
              <th>index</th>
              <th>Motorcycle title</th>
              <th>Motorcycle Model</th>
              <th>Cylinder and acceleration</th>
              <th>Price</th>
              <th>Images</th>
              <th style={{ textAlign: 'right' }}>Reserved At</th>
            </tr>
          </thead>
          <tbody>
            {
            myReservations.map((reserve, index) => (
              <tr key={reserve?.id}>
                <th className="align-middle">{index + 1}</th>
                <th className="align-middle">
                  {
                    selectMotorcycle(reserve?.motorcycle_id)?.title
                }
                </th>
                <th className="align-middle">dsf</th>
                <th className="align-middle">
                  <p className="mb-0">
                    {2}
                    {' '}
                    cylinders
                  </p>
                  <p className="mb-0">acceleration</p>
                </th>
                <th className="align-middle">fds</th>
                <th className="align-middle">fds</th>
                <th className="align-middle" style={{ textAlign: 'right' }}>
                  {
                    new Date(reserve?.created_at).toUTCString()
                }
                </th>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    </AllContainer>
  );
}

export default MyReservations;
