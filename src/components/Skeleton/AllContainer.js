/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import NotFound404 from './404';
import LoadingContainer from './LoadingContainer';

function AllContainer({
  auth = false, loading = false, error = false, children,loadingType
}) {
    const {currentUser,loading:userLoading,error}=useSelector(state=>state.account)
  return (
    <Navigation>
    {
  auth?
  userLoading?
  <LoadingContainer type={loadingType} />:
   !currentUser? <NotFound404 />
    }
    </Navigation>
  );
}

export default AllContainer;
