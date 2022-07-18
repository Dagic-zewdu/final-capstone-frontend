import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { fetchMotorCyclesAsync } from '../../Redux/actions/motorcycle';
import { cancelReservation, fetchReservationsAsync } from '../../Redux/actions/reservation';
import responsive from '../../utils/responsive';
import AllContainer from '../Shared/AllContainer';
import AddReservation from './AddReservation';

function MyReservations() {
  const { currentUser, loading: userLoading, token } = useSelector((state) => state.account);
  const { data, loading, error } = useSelector((state) => state.reservations);
  const {
    data: motorcycles,
    loading: motorCycleLoading,
  } = useSelector((state) => state.motorcycles);
  const [myReservations, setReservations] = useState([]);
  const [EditReservation, setEditReservationData] = useState({
    cycle: null,
    reservation: null,
  });
  const [edit, showEdit] = useState(false);
  const dispatch = useDispatch();

  /** fetch data if data is empty */
  useEffect(() => {
    if (!data.length) { dispatch(fetchReservationsAsync()); }
    if (!motorcycles.length) { dispatch(fetchMotorCyclesAsync()); }
  }, []);

  useEffect(() => {
    if (!userLoading) {
      const myReservations = data.filter((reservation) => reservation?.user_id === currentUser?.id);
      setReservations(myReservations.reverse());
    }
  }, [data, currentUser]);
  const { addToast } = useToasts();
  const selectMotorcycle = (id) => motorcycles.find((motorcycle) => motorcycle?.id === id);
  const CancelReservation = (id) => {
    dispatch(cancelReservation(id, token, addToast));
  };
  const editReservation = (reservation, cycle) => {
    setEditReservationData({ reservation, cycle });
    showEdit(true);
  };
  return (
    <AllContainer
      auth
      loading={loading && motorCycleLoading}
      error={error}
      data={myReservations}
    >
      <div className="d-flex align-items-center justify-content-center w-100" style={{ minHeight: '100vh' }}>
        <Table bordered>
          <thead>
            <tr>
              <th>index</th>
              <th>Motorcycle title</th>
              <th>Motorcycle Model</th>
              <th>Cylinder and acceleration</th>
              <th>Price</th>
              <th>Images</th>
              <th>Reserved at</th>
              <th>Contact Phone</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
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
                <td className="align-middle" style={{ maxWidth: 250 }}>
                  <Carousel autoPlay responsive={responsive([1, 1, 1])}>
                    { selectMotorcycle(reserve?.motorcycle_id)
                      ? selectMotorcycle(reserve?.motorcycle_id)
                        .images.map((image) => (
                          <img
                            src={image}
                            style={{ height: 250, width: '100%', objectFit: 'cover' }}
                            key={image}
                            alt=""
                          />
                        ))
                      : <p />}

                  </Carousel>
                </td>
                <td className="align-middle">
                  {' '}
                  {
                    new Date(reserve.created_at).toUTCString()
                }

                </td>
                <td className="align-middle">
                  {reserve.phone ? reserve.phone : 'No phone dropped please drop your phone'}
                </td>
                <td className="align-middle" style={{ textAlign: 'right' }}>
                  <Button
                    variant="outline-danger"
                    className="mb-3"
                    onClick={() => editReservation(reserve,
                      selectMotorcycle(reserve?.motorcycle_id))}
                  >
                    <FontAwesomeIcon ico={faPencil} className="mr-10" />
                    {reserve.phone ? 'Update phone number' : 'Drop phone number'}
                  </Button>
                  <Button variant="outline-danger" onClick={() => CancelReservation(reserve?.id)}>
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
      <AddReservation
        edit
        reservation={EditReservation.reservation}
        cycle={EditReservation.cycle}
        show={edit}
        showReservation={showEdit}
      />
    </AllContainer>
  );
}

export default MyReservations;
