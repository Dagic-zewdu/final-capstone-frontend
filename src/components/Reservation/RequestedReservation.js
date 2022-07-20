import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchMotorCyclesAsync } from '../../Redux/actions/motorcycle';
import { fetchReservationsAsync } from '../../Redux/actions/reservation';
import { DoNothing, removeDuplicates } from '../../utils/utils';
import responsive from '../../utils/responsive';
import AllContainer from '../Shared/AllContainer';
import { fetchUsersAsync } from '../../Redux/actions/users';
import UserTemplate from '../Shared/UserTemplate';

function RequestedReservation() {
  const { currentUser } = useSelector((state) => state.account);
  const { data: users, loading: UsersLoading } = useSelector((state) => state.users);
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
    dispatch(fetchUsersAsync());
  }, []);
  const setReservationData = () => {
    const postedMotorCycle = motorcycles.filter((m) => m.user_id === currentUser?.id);
    const reserve = postedMotorCycle.map((motorcycle) => data.find(
      (r) => r.motorcycle_id === motorcycle?.id,
    ));
    const Reserve = [];
    reserve.forEach((r) => (r ? Reserve.push(r) : DoNothing()));
    setReservations(removeDuplicates(Reserve, 'id').reverse());
  };
  useEffect(() => {
    setReservationData();
  }, [motorcycles, data, currentUser]);
  const selectMotorcycle = (id) => motorcycles.find((motorcycle) => motorcycle?.id === id);
  const selectUser = (id) => users.find((user) => user?.id === id);

  return (
    <AllContainer
      auth
      loading={loading && motorCycleLoading && UsersLoading}
      error={error}
      data={myReservations}
    >
      <div className="d-flex table-cont justify-content-center w-100" style={{ minHeight: '100vh' }}>
        <Table bordered>
          <thead>
            <tr>
              <th className="text-uppercase fw-bolder text-center">index</th>
              <th className="text-uppercase fw-bolder text-center">Motorcycle title</th>
              <th className="text-uppercase fw-bolder text-center">Motorcycle Model</th>
              <th className="text-uppercase fw-bolder text-center">Cylinder and acceleration</th>
              <th className="text-uppercase fw-bolder text-center">Price</th>
              <th className="text-uppercase fw-bolder text-center">Images</th>
              <th className="text-uppercase fw-bolder text-center">Reserved at</th>
              <th className="text-uppercase fw-bolder text-center">Requested by</th>
            </tr>
          </thead>
          <tbody>
            {
            myReservations.map((reserve, index) => (
              <tr key={reserve?.id}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">
                  {selectMotorcycle(reserve?.motorcycle_id)?.title}
                </td>
                <td className="align-middle">
                  {selectMotorcycle(reserve?.motorcycle_id)?.model}

                </td>
                <td className="align-middle">
                  <p className="mb-0">
                    {selectMotorcycle(reserve?.motorcycle_id)?.cylinder}
                    {' '}
                    cylinders
                  </p>
                  <p className="mb-0 fw-bolder">{selectMotorcycle(reserve?.motorcycle_id)?.acceleration}</p>

                </td>

                <td className="align-middle fw-bolder">
                  {selectMotorcycle(reserve?.motorcycle_id)?.price}
                </td>
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
                  {
                    new Date(reserve.created_at).toUTCString()
                }
                </td>
                <td className="align-middle">
                  <UserTemplate user={selectUser(reserve?.user_id)} />
                  {reserve.phone ? `Phone ${reserve.phone}` : 'No phone dropped please'}
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

export default RequestedReservation;
