import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function MyReservations() {
  const { data, loading, error } = useSelector((state) => state.reservations);
  const [myReservations, setReservations] = useState([]);
  useEffect(() => {

  }, []);
  return (
    <div>MyReservations</div>
  );
}

export default MyReservations;
