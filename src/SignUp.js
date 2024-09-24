import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser, signUpSuccess } from './redux/action/userAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import use from './images/use.png';
import user from './images/user.png';
import contacts from './images/contacts.png';
import padlock from './images/padlock.png';
import pad from './images/pad.png';
import ndogs from './images/ndogs.png';
import Flogo from './images/Flogo.jpg';


function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    firstname: 'Clarence',
    lastname: 'Cuenca',
    contact: '09918816751',
    password: 'clarence',
    repassword: 'clarence',
  });

  const handleSignup = (event) => {
    event.preventDefault();

    // Check if the passwords match
    if (userData.password !== userData.repassword) {
      alert('Passwords do not match');
      return; 
    }

    dispatch(signupUser(userData));

    navigate('/signin');
  };
  

  return (
    <div className="back">
      <div className="container">
        <div>
          <img src={Flogo} className='for-logs'/>
          <a className='for-home' href='/home'>Home</a>
        </div>
        <div className="row row-row">
          <div className="col-md-6">
            <div className="contains p-5">
              <h4 className="text-center mb-4 text">Create Account</h4>
              <p className="signin-text">
                    Already have an account? Click <a href="/signin" className='sign-in'>Login</a>
                </p>
              <form id="signup-form" method="POST" onSubmit={handleSignup}>
                <div className="input-container mb-3">
                  <img src={use} alt="User Icon" className='use'/>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Firstname"
                    required
                    className="form-control"
                    pattern='^(?:[A-Z][a-z]*\s?)+$'
                    title='First letter of your firstname must be capital.'
                    onChange={(e) => setUserData({ ...userData, firstname: e.target.value })}
      
                  />
                </div>

                <div className="input-container mb-3">
                  <img src={user} alt="User Icon" className='use'/>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Lastname"
                    required
                    className="form-control"
                    pattern='^(?:[A-Z][a-z]*\s?)+$'
                    title='First letter of your lastname must be capital.'
                    onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
      
                  />
                </div>
                <div className="input-container mb-3">
                  <img src={contacts} alt="User Icon" className='use'/>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="09918816751"
                    required
                    className="form-control"
                    pattern='^09\d{9}$'
                    title='Your number must start with 09 and must contain 11 digits only.'
                    onChange={(e) => setUserData({ ...userData, contact: e.target.value })}
      
                  />
                </div>
                <div className="input-container mb-3">
                  <img src={padlock} alt="User Icon" className='use'/>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="form-control"
                    pattern='^.{6,16}$'
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      
                  />
                </div>
                <div className="input-container mb-4">
                  <img src={pad} alt="User Icon" className='use'/>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    placeholder="Re-enter Password"
                    required
                    className="form-control"
                    pattern='^.{6,16}$'
                    onChange={(e) => setUserData({ ...userData, repassword: e.target.value })}
      
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
          <p className='text-align-center welcome'>Welcome!</p>
          <p className='atext'>Create your account now for long-term access to the system and join us in celebrating the bond with your beloved fur babies.</p>
            <img src={ndogs} className="img-fluid ndogs" alt="User Icon" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;