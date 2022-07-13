/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
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
            ? <ErrorContainer error={error} />
            : children
      }
      </AuthorizeUser>
    )

    : loading
      ? <LoadingContainer type={loadingType} />
      : error
        ? <ErrorContainer error={error} />
        : children

    }
    </Navigation>
  );
}

export default AllContainer;
