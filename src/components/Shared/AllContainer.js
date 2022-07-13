/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import AuthorizeUser from '../Auth';
import Navigation from '../Navigation';
import ErrorContainer from './ErrorContainer';
import LoadingContainer from './LoadingContainer';

function AllContainer({
  auth = false, loading = false, error = false, children, loadingType,
}) {
  return (
    <Navigation>
      {
  auth
    ? (
      <AuthorizeUser loadingType={loadingType}>
        {
        loading
          ? <LoadingContainer type={loadingType} />
          : error
            ? <ErrorContainer />
            : children
      }
      </AuthorizeUser>
    )

    : loading
      ? <LoadingContainer type={loadingType} />
      : error
        ? <ErrorContainer />
        : children

    }
    </Navigation>
  );
}

export default AllContainer;
