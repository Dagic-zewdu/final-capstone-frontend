import React from 'react';
import GoogleLogin from 'react-google-login';
import config from '../../config/config';

function GoogleSignIn() {
  const signInwithGoogle = (user) => {

  };
  const signInGoogleFailure = (user) => {

  };
  return (
    <GoogleLogin
      clientId={config.GoogleClientId}
      onSuccess={signInwithGoogle}
      onFailure={signInGoogleFailure}
      cookiePolicy="single_host_origin"

      render={(renderProps) => (
        <CustomButton onClick={renderProps.onClick} disabled={renderProps.disabled} isGoogleSignIn>
          Sign in with Google
        </CustomButton>

      )}
    />
  );
}

export default GoogleSignIn;
