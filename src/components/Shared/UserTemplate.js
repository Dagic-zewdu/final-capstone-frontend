/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from 'react-avatar';

function UserTemplate({ user }) {
  return (
    <div className="d-flex align-items-center w-100">

      <Avatar
        round
        size="50"
        name={user?.username}
        style={{ marginRight: 10 }}
        src={user?.photo}
      />
      <div className="d-flex flex-column justify-content-center">
        <p className="mb-0">{user?.username}</p>
        <p className="mb-0 bolder"><small>{user?.email}</small></p>
      </div>
    </div>
  );
}

export default UserTemplate;
