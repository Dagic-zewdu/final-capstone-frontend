/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { Button, NavDropdown, Spinner } from 'react-bootstrap';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useToasts } from 'react-toast-notifications';
import { gapi } from 'gapi-script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config/config';
import { fetchCurrentAccount, logInAsync } from '../../Redux/actions/account';

function GoogleSignIn() {
  const { account } = useSelector((state) => state);
  const { currentUser, token, loading } = account;
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentAccount(token));
    }
  }, [token]);

  const { addToast } = useToasts();
  const signInwithGoogle = (user) => {
    const { name: username, imageUrl: photo, email } = user?.profileObj;
    dispatch(logInAsync({ username, photo, email }));
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: config.GoogleClientId,
        scope: 'email',
        prompt: 'select_account',
      });
    }

    gapi.load('client:auth2', start);
  }, []);
  const signInGoogleFailure = (err) => {
    addToast(err?.error, {
      appearance: 'error',
      autoDismiss: true,
    });
  };
  const LogOutSuccess = () => {
    setUser(null);
  };
  return (
    loading
      ? (
        <div className="d-flex align-items-center justify-content-center w-100">
          <Spinner animation="grow" />
        </div>
      )
      : !currentUser ? (
        <GoogleLogin
          clientId={config.GoogleClientId}
          onSuccess={signInwithGoogle}
          onFailure={signInGoogleFailure}
          cookiePolicy="single_host_origin"
          prompt="select_account"
          render={(renderProps) => (
            <Button
              variant="outline-warning"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FontAwesomeIcon icon={faGoogle} />
              Sign in
            </Button>
          )}
        />
      ) : (
        <div className="d-flex">
          <Avatar round size="50" name={user.username} style={{ marginRight: 10 }} src={user.photo} />
          <NavDropdown title="" id="collasible-nav-dropdown">
            <GoogleLogout
              clientId={config.GoogleClientId}
              onLogoutSuccess={LogOutSuccess}
              render={(renderProps) => (
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Logout
                </NavDropdown.Item>
              )}
            />
          </NavDropdown>
        </div>
      ));
}

export default GoogleSignIn;
