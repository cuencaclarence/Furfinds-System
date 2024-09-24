import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import contacts from './images/contacts.png';
import pad from './images/pad.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import google from './images/google.png';
import dogss from './images/dogss.png';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/action/userAction';
import logs from './images/logs.png';

function SignIn() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ contact: '', password: '' });
 
  const handleLogin = (event) => {
    event.preventDefault();
 
    if (loginData.contact === '09518799165' && loginData.password === 'jorgie') {
      navigate('/account');
    } else {
      // Handle invalid credentials, e.g., show an error message
      alert('Invalid contact or password');
    }
  };

  return (
    <div className="back">
      <div className='container'>
      <div>
          <img src={logs} className='for-logs'/>
          <a className='for-home' href='/home'>Home</a>
        </div>
      <div className="row d-flex align-items-center item">
        <div className="col-md-5">
          <div className="cont">
            <h3 className='text-center mb-4 texts'>Login Your Account</h3>

            <div className="text-center mt-4">
               
              <button className="icon" title="Login with Facebook">
                <img src={facebook} alt="User Icon" />
              </button>
              <button className="icons" title="Login with Google">
                <img src={google} alt="User Icon" />
              </button>
              <button className="icon" title="Login with Twitter">
                <img src={twitter} alt="User Icon" />
              </button>
                <div class="or-line">
                    <div class="or-text">OR</div>
                </div>
            </div>
         

            <form id="signin-form" onSubmit={handleLogin} method="POST">
              <div className="input-container">
                <img src={contacts} alt="User Icon" />
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="09123456781"
                  value={loginData.contact}
                  onChange={(e) => setLoginData({ ...loginData, contact: e.target.value })}
                  pattern='^09\d{9}$'
                  title='Your number must start with 09 and must contain 11 digits only.'
                  required
                />
              </div>
              <div className="input-container">
                <img src={pad} alt="User Icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>
              <p className="signup-text">
                Don't have an account? Click{' '}
                <a href="/signup" className="sign-up">
                  Create Account
                </a>
              </p>
              <input type="submit" value="Login" className="submit" />
            </form>

           
          </div>
        </div>

        <div className="col-md-6">
               
                <img src={dogss} className="paws" alt="User Icon" />
               

        </div>
      </div>
      </div>
    </div>
  );
}

export default SignIn;
