/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { Button, NavDropdown, Spinner } from 'react-bootstrap';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useToasts } from 'react-toast-notifications';
import { gapi } from 'gapi-script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config/config';
import {
  fetchAccountSuccess, fetchCurrentAccount, logInAsync, setToken,
} from '../../Redux/actions/account';
import { showSuccessToast } from '../../shared/toast';

function GoogleSignIn() {
  const { account } = useSelector((state) => state);
  const { currentUser, token, loading } = account;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentAccount(token));
  }, []);

  const { addToast } = useToasts();
  const signInwithGoogle = (user) => {
    const { name: username, imageUrl: photo, email } = user?.profileObj;
    dispatch(logInAsync({ username, photo, email }, addToast));
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
    dispatch(fetchAccountSuccess(null));
    dispatch(setToken(null));
    showSuccessToast('Logout success see you soon!', addToast);
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
              class="m-2 fs-4 w-100"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              <FontAwesomeIcon icon={faGoogle} style={{ color: 'red' }} class="fw-bolder fs-5" />
              Sign in
            </Button>
          )}
        />
      ) : (
        <div className="d-flex justify-content-around align-items-center ">
          <div className="d-flex align-items-center w-100">

            <Avatar
              round
              size="50"
              name={currentUser?.username}
              style={{ marginRight: 10 }}
              src={currentUser?.photo}
            />
            <div className="d-flex flex-column justify-content-center">
              <p className="mb-0 fw-bolder text-capitalized" style={{ fontFamily: "'Rubik', sans-serif" }}>{currentUser?.username}</p>
              <p className="mb-0" style={{ fontFamily: "'Rubik', sans-serif" }}><small>{currentUser?.email}</small></p>
            </div>
          </div>
          <NavDropdown title="" id="collasible-nav-dropdown">
            <GoogleLogout
              clientId={config.GoogleClientId}
              onLogoutSuccess={LogOutSuccess}
              class="text-danger"
              render={(renderProps) => (
                <NavDropdown.Item
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  style={{
                    fontFamily: "'Rubik', sans-serif", fontSize: '14px', backgroundColor: '#dc3545', textAlign: 'center',
                  }}
                >
                  <span className="text-light fw-bolder">Logout</span>
                </NavDropdown.Item>
              )}
            />
          </NavDropdown>
        </div>
      ));
}

export default GoogleSignIn;
