import React, { useEffect, useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { Button, NavDropdown } from 'react-bootstrap';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useToasts } from 'react-toast-notifications';
import { gapi } from 'gapi-script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import config from '../../config/config';

function GoogleSignIn() {
  const { account } = useSelector((state) => state);
  const { addToast } = useToasts();
  const [user, setUser] = useState(null);
  const signInwithGoogle = (user) => {
    const { name: username, imageUrl: photo, email } = user?.profileObj;
    setUser({ username, photo, email });
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
    console.log(err);
    addToast(err?.error, {
      appearance: 'error',
      autoDismiss: true,
    });
  };
  const LogOutSuccess = () => {
    setUser(null);
  };
  return !user ? (
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
  );
}

export default GoogleSignIn;
