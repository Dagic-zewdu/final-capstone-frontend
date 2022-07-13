/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

function LoadingContainer({
  auth = false, loading = false, error = false, children,type="spinner"
}) {
    const {currentUser,loading:userLoading,error}=useSelector(state=>state.account)
  return (
    auth?
  );
}

export default LoadingContainer;
