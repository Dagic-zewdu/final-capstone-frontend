/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthorizeUser from '../Auth';
import Navigation from '../Navigation';
import ErrorContainer from './ErrorContainer';
import LoadingContainer from './LoadingContainer';

function AllContainer({
  navigation = true, auth = false, loading = false, error = false, children, loadingType, data = [],
}) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    navigation
      ? (
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
            : data.length ? children
              : (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faMotorcycle} className="fa-3x" />
                  <h1 className="mt-4">No data yet</h1>
                </div>
              )
      }
      </AuthorizeUser>
    )

    : loading
      ? <LoadingContainer type={loadingType} />
      : error
        ? <ErrorContainer error={error} />
        : data.length ? children : (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <FontAwesomeIcon icon={faMotorcycle} className="fa-3x" />
            <h1 className="mt-4">No data yet</h1>
          </div>
        )

    }
        </Navigation>
      )

      : auth
        ? (
          <AuthorizeUser loadingType={loadingType}>
            {
        loading
          ? <LoadingContainer type={loadingType} />
          : error
            ? <ErrorContainer error={error} />
            : data.length ? children
              : (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faMotorcycle} className="fa-3x" />
                  <h1 className="mt-4">No data yet</h1>
                </div>
              )
      }
          </AuthorizeUser>
        )

        : loading
          ? <LoadingContainer type={loadingType} />
          : error
            ? <ErrorContainer error={error} />
            : data.length ? children : (
              <div className="d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faMotorcycle} className="fa-3x" />
                <h1 className="mt-4">No data yet</h1>
              </div>
            )

  );
}

export default AllContainer;
