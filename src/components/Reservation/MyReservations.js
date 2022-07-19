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
import './styles/index.css';

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
      <div className="d-flex table-cont justify-content-center w-100" style={{ minHeight: '' }}>
        <Table bordered>
          <thead>
            <tr>
              <th></th>
              <th class="text-uppercase fw-bolder text-center">Motorcycle title</th>
              <th class="text-uppercase fw-bolder text-center">Motorcycle Model</th>
              <th class="text-uppercase fw-bolder text-center">Cylinder and acceleration</th>
              <th class="text-uppercase fw-bolder text-center">Price</th>
              <th class="text-uppercase fw-bolder text-center">Images</th>
              <th class="text-uppercase fw-bolder text-center">Reserved at</th>
              <th class="text-uppercase fw-bolder text-center">Contact Phone</th>
              <th class="text-uppercase fw-bolder text-center" style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            myReservations.map((reserve, index) => (
              <tr key={reserve?.id}>
                <td className="align-middle fw-bolder">{index + 1}</td>
                <td className="align-middle fw-bolder text-uppercase">
                  {
                    selectMotorcycle(reserve?.motorcycle_id)?.title
                }
                </td>
                <td className="align-middle fw-bolder">dsf</td>
                <td className="align-middle fw-bolder">
                  <p className="mb-0">
                    {2}
                    {' '}
                    cylinders
                  </p>
                  <p className="mb-0 fw-bolder">acceleration</p>
                </td>
                <td className="align-middle fw-bolder">fds</td>
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
                <td className="align-middle fw-bolder">
                  {' '}
                  {
                    new Date(reserve.created_at).toUTCString()
                }

                </td>
                <td className="align-middle fw-bolder">
                  {reserve.phone ? reserve.phone : 'No phone dropped please drop your phone'}
                </td>
                <td className="align-middle" style={{ textAlign: 'right' }}>
                  <Button
                    variant="outline-danger"
                    className="mb-3 fw-bolder"
                    onClick={() => editReservation(reserve,
                      selectMotorcycle(reserve?.motorcycle_id))}
                  >
                    <FontAwesomeIcon ico={faPencil} className="mr-10" />
                    {reserve.phone ? 'Update phone number' : 'Drop phone number'}
                  </Button>
                  <Button variant="outline-danger" onClick={() => CancelReservation(reserve?.id)}>
                    <FontAwesomeIcon ico={faTrash} className="mr-10" />
                    <span class="fw-bolder" >Cancel</span>
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
