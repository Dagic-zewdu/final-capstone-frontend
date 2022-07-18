import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
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
              <th>Reserved at</th>
              <th style={{ textAlign: 'right' }}>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {
            myReservations.map((reserve, index) => (
              <tr key={reserve?.id}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">
                  {
                    selectMotorcycle(reserve?.motorcycle_id)?.title
                }
                </td>
                <td className="align-middle">dsf</td>
                <td className="align-middle">
                  <p className="mb-0">
                    {2}
                    {' '}
                    cylinders
                  </p>
                  <p className="mb-0">acceleration</p>
                </td>
                <td className="align-middle">fds</td>
                <td className="align-middle">fds</td>
                <td className="align-middle">
                  {' '}
                  {
                    new Date(reserve.created_at).toUTCString()
                }

                </td>
                <td className="align-middle" style={{ textAlign: 'right' }}>
                  <Button variant="outline-danger">
                    <FontAwesomeIcon ico={faTrash} className="mr-10" />
                    Cancel
                  </Button>
                </td>
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
