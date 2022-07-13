/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import NotFound404 from './404';
import ErrorContainer from './ErrorContainer';
import LoadingContainer from './LoadingContainer';

function AllContainer({
  auth = false, loading = false, error = false, children,loadingType
}) {
    const {currentUser,loading:userLoading}=useSelector(state=>state.account)
  return (
    <Navigation>
    {
  auth?
  userLoading?
  <LoadingContainer type={loadingType} />:
   !currentUser? <NotFound404 />:
   loading?
   <LoadingContainer type={loadingType} />:
   error?
   <ErrorContainer error={error} />:
   children
    }
    </Navigation>
  );
}

export default AllContainer;
