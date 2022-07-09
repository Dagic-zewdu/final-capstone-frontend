import React from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import config from '../../config/config';

function GoogleSignIn() {
  const signInwithGoogle = (user) => {
    console.log(user);
  };
  const signInGoogleFailure = (err) => {
    console.log(err);
  };
  return (
    <GoogleLogin
      clientId={config.GoogleClientId}
      onSuccess={signInwithGoogle}
      onFailure={signInGoogleFailure}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <Button variant="outline-warning" onClick={renderProps.onClick} disabled={renderProps.disabled} isGoogleSignIn>
          <FontAwesomeIcon icon={faGoogle} className="bg-warning" />
          {' '}
          Sign in
        </Button>
      )}
    />
  );
}

export default GoogleSignIn;
