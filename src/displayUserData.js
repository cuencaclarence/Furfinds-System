import { useSelector } from 'react-redux';

function DisplayUserData() {
  const userData = useSelector((state) => state.user);

  return (
    <div>
      <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Contact: {userData.contact}</p>
    </div>
  );
}

export default DisplayUserData;