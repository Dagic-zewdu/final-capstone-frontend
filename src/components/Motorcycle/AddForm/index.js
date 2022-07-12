import React from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../Navigation';

function AddMotorCycle() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
  };
  return (
    <Navigation>
      <form action="" />

    </Navigation>
  );
}

export default AddMotorCycle;
