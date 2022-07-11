import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useToasts } from 'react-toast-notifications';
import { gapi } from 'gapi- script';
import config from '../../config/config';

function GoogleSignIn() {
  const { addToast } = useToasts();
  const signInwithGoogle = (user) => {
    console.log(user);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: config.GoogleClientId,
        scope: 'email',
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
  return (
    <GoogleLogin
      clientId={config.GoogleClientId}
      onSuccess={signInwithGoogle}
      onFailure={signInGoogleFailure}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <Button variant="outline-warning" onClick={renderProps.onClick} disabled={renderProps.disabled} isGoogleSignIn>
          <FontAwesomeIcon icon={faGoogle} />
          {' '}
          Sign in
        </Button>
      )}
    />
  );
}

export default GoogleSignIn;
