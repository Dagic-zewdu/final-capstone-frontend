/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import NotFound404 from '../Shared/404';
import LoadingContainer from '../Shared/LoadingContainer';

function AuthorizeUser({ loadingType, children }) {
  const { currentUser, loading: userLoading } = useSelector((state) => state.account);

  return (
    userLoading
      ? <LoadingContainer type={loadingType} />
      : !currentUser ? <NotFound404 /> : children
  );
}

export default AuthorizeUser;
