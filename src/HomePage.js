import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import regdog from './images/regdog.png';
import dogs from './images/dog1.png';
import logs from './images/logs.png';
import aboutImage from './images/about-img.png';
import './Home.css'; 
import './font.css'; 
import mail from './images/email.png';
import phone from './images/phone.png';
import chat from './images/chat.png';
import tian from './images/tian.jpg';
import jorg from './images/jorgie.jpg';
import cla from './images/clarence.jpg';
import da from './images/d-1.jpg';
import db from './images/d-2.jpg';
import dc from './images/d-3.jpg';
import dd from './images/d-4.jpg';
import df from './images/d-5.jpg';
import dg from './images/d-6.jpg';
import dh from './images/d-7.jpg';
import di from './images/d-8.jpg';
import dj from './images/d-9.jpg';
import dk from './images/d-10.jpg';

function HomePage() {

  const scrollTo = (elementId) => {
    scroll.scrollTo(document.getElementById(elementId).offsetTop, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  //Dog Images
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 200); // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 200); // Adjust the scroll distance as needed
  };

  return (
    <div className='bg-image'>
      <div className='container'>
      {/* <div className='masthead' style={{ backgroundImage: `url(${require('./images/next.png')})` }}>
        <div className="color-overlay d-flex justify-content-center align-items-center"> */}

          <div className='row '>
            <div className="col-md-1 mt-1 for-logo">
              <div className="logs">
                <img src={logs} className="logs" alt="User Icon" />
              </div>
            </div>
            <div className='col-md-3 mt-2'>
              <p className='system'>Canine Recognition System</p>
            </div>
            <div className="col-md-3">
              <div className='nav-wrapper '>
              <nav className="mr-2">
                <ul className="nav-menu justify-content-end d-flex ">
                  <li className="nav-item ml-2">
                    <a className="nav-link" onClick={() => scrollTo('about')}>About</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link" onClick={() => scrollTo('services')}>Services</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link" onClick={() => scrollTo('developer')}>Developer</a>
                  </li>
                  <li className="nav-item ml-2">
                    <a className="nav-link" onClick={() => scrollTo('contact')}>Contact</a>
                  </li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        {/* </div>
      </div> */}



        <div className="row row-container">
          <div className="col-lg-6 mt-5 ">
          <img src={logs} className="logos" alt="User Icon" />
          <div className="sign">
              <p className='opt'>To get started, please choose one of the following options:</p>
              <a href='/signin' className="btn btn-primary signup-signin-links active signin">SIGNIN</a>
              <a href="/signup" className="btn btn-dark signup-signin-links signup">SIGNUP</a>
              
            </div>
          </div>
          <div className="col-lg-5 mt-5 text-centers">
            <div className="header">
              <h1 className="display-3 text-center heads">CANINE RECOGNITION</h1>
              <p className="lead text-center">
                Our system is a cutting-edge solution designed to help dog owners
                find their lost pets quickly and efficiently. It offers a
                user-friendly platform for registering your dog's details, reporting
                them as lost, and engaging with the local community to aid in the
                search. Our system maximizes the chances of reuniting lost dogs with
                their loving owners, fostering a sense of community support and
                responsible pet ownership.
              </p>
            </div>

            
          </div>
        </div>

        <div id='services' className="menu mt-5 d-flex justify-content-center menu-container">
          <div className="menu-item text-center feature">
            <div className="row">
              <div className="col-0">
                <img src={regdog} className="user-dog" />
              </div>
              <div className="col-0">
                <button className="btn btn-primary but">
                  REGISTER YOUR PET
                </button>
              </div>
            </div>
            <p className='para'>
              Register your beloved dog here to build a comprehensive digital
              record and information, contributing to the safety and well-being of
              your furry family member if they get lost.
            </p>
          </div>
          <div className="menu-item text-center center feature">
            <div className="row">
              <div className="col-0">
                <FontAwesomeIcon icon={faSearch} className="search" />
              </div>
              <div className="col-0">
                <button className="btn btn-primary but">
                  FIND DOG
                </button>
              </div>
            </div>
            <p className='para'>
              The heart of our system, dedicated to reuniting lost dogs with their
              owners. Users can easily search for missing dogs in their area using
              this feature. By inputting key details, such as location, breed, or
              specific characteristics, our system provides real-time search results
              and alerts. With the power of community support and technology, finding
              lost dogs has never been more accessible and efficient.
            </p>
          </div>
          <div className="menu-item text-center feature">
            <div className="row">
              <div className="col-0">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="money" />
              </div>
              <div className="col-0">
                <button className="btn btn-primary but">
                  PAYMENT
                </button>
              </div>
            </div>
            <p className='para'>
              The system can ensure its long-term viability, continued support, and
              the ability to enhance its functionality for the benefit of both dog
              owners and the broader community.
            </p>
          </div>
        </div>
        <div id='dogs' >
          <h3 className='register-dogs'>Registered Dogs</h3>
          <div className='row dogs-container'>
            <button className='scroll-button b-left' onClick={scrollRight}>&lt;</button>
            <div className='dogs-list' style={{ marginLeft: scrollPosition }}>
              <div className='col-md-2'>
                <img src={da} className='r-dog' />
                <p className='r-name'>Duppy</p>
              </div>
              <div className='col-md-2'>
                <img src={db} className='r-dog' />
                <p className='r-name'>Black</p>
              </div>
              <div className='col-md-2'>
                <img src={dc} className='r-dog' />
                <p className='r-name'>Butter</p>
              </div>
              <div className='col-md-2'>
                <img src={dd} className='r-dog' />
                <p className='r-name'>Summer</p>
              </div>
              <div className='col-md-2'>
                <img src={dk} className='r-dog' />
                <p className='r-name'>Rocky</p>
              </div>
              <div className='col-md-2'>
                <img src={df} className='r-dog' />
                <p className='r-name'>Bait</p>
              </div>
              <div className='col-md-2'>
                <img src={dg} className='r-dog' />
                <p className='r-name'>Chummy</p>
              </div>
              <div className='col-md-2'>
                <img src={dh} className='r-dog' />
                <p className='r-name'>Bantay</p>
              </div>
              <div className='col-md-2'>
                <img src={di} className='r-dog' />
                <p className='r-name'>Brock</p>
              </div>
            </div>
            <button className='scroll-buttons b-right' onClick={scrollLeft}>&gt;</button>
          </div>
        </div>
        <div id='about' className='mt-5 '>
          <div className='aboutus'>
              
            <div className='row'>
              <div className='col-md-6 about'><h3 className='abt'><em className='abt'>About Us</em></h3>
                Welcome to Canine Recognition System, where innovation meets compassion for our four-legged friends. Our canine recognition system is designed to provide a secure and efficient platform for pet owners, helping them keep their beloved companions safe and sound.
                
              </div>
              <div className='col-md-6 ml-5'>
                <img className='ml-5 aboutImg' src={aboutImage} alt='about image' />
              </div>
            </div>
          </div>
        </div>
        <div id='developer'>
          <h3 className='serv'><strong><em className='teams'>Meet the Team</em></strong></h3>
            <div className='row d-flex justify-content-center team'>
              <div className='col-md-4  t-bg'>
                <img src={jorg} className='t-name jing'/>
                <p className='name name-j'>Jorgie Escol</p>
                <p className='part'>Front End Developer</p>
              </div>
              <div className='col-md-4 t-bg'>
                <img src={tian} className='t-name'/>
                <p className='name'>Christian Daeniel Armenion</p>
                <p className='part part-a'>Graphic Designer</p>
              </div>
              <div className='col-md-4 t-bg'>
                <img src={cla} className='t-name'/>
                <p className='name name-c'>Clarence Cuenca</p>
                <p className='part part-c'>Back End Developer</p>
              </div>
            </div>
        </div>
        
        <h3 className='ml-2 contact'><strong><em className='contact'>Contact Us</em></strong></h3>
            
        <div className='row mt-5' id='contact'>
          <div className='col-md-3 email' >
            <img className='g' src={mail} alt="mail" />
              <h4 className='contactus'>Email</h4>
              <p className='contactus'>Start to message us via email if you have inquiries and need help.</p>
              <button className='btn-contactus'>Email Us</button>

          </div>
          <div className='col-md-3 mt-1 my-phone'>
            <img className='g' src={phone} alt="mail" />
              <h4 className='contactus'>By Phone</h4>
              <p className='contactus'>8600 Butuan City, Philippines</p>
              <p className='contactus'>+639123456890</p>
              <br></br>

              <p className='contactus'>International</p>
              <p className='contactus'>1-604-637-7483</p>
          </div>
          <div className='col-md-3 mt-1 live-chat'>
            <img className='g' src={chat} alt="mail" />
              <h4 className='contactus'>Live Chat</h4>
              <p className='contactus'>Chat with one of our in-house member</p>
              <button className='btn-contactus'>Chat Now</button>
          </div>
        </div>
        <footer>
          <p className='copyright text-center'>All Rights Reserved Copyright 2023 @ Canine Recognition </p>
        </footer>
        
      </div>
      
    </div>

  );

}

export default HomePage;