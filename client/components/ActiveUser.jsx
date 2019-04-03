import React from 'react';

function ActiveUser({ username }) {
  return (
    <div className="activeUser">
      <p>{username}</p>
      <div className="greenCircle" />
    </div>
  );
}

export default ActiveUser
