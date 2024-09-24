import React from 'react';
import { useSelector } from 'react-redux';

function UserData() {
  const userData = useSelector((state) => state.user);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Firstname: {userData.firstname}</p>
      <p>Lastname: {userData.lastname}</p>
      <p>Contact: {userData.contact}</p>
      <p>Password: {userData.password}</p>
      <p>Re_Password: {userData.repassword}</p>
    </div>
  );
}

export default UserData;