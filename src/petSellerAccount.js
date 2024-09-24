import React, { useState, useEffect } from 'react';
import './sellerAccount.css';
import './accSize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import pet from './images/pet.png';
import star from './images/star.png';
import reg from './images/add-pet.png';
import address from './images/address.png';
import sex from './images/sex.png';
import age from './images/age.png';
import number from './images/number.png';
import crown from './images/crown.png';
import myuser from './images/myuser.png';
import check from './images/check.png';
import happy from './images/happy.jpg';
import { updateUserData } from './redux/action/userAction';
import { addPet, updatePetImages } from './redux/action/petAction';
import { subscribeToPremium } from './redux/action/premiumAction';
//import FindDogModal from './findDogModal';
import canine1 from './images/canine1.jpg';
import canine2 from './images/canine2.png';
import canine3 from './images/canine3.png';
import upload from './images/upload.png';
import me from './images/me.jpg';
import mobile from './images/mobile.png';
import ownerPet from './images/owner-pet.png';
import location from './images/location.png';
import find1 from './images/2.png';
import find2 from './images/3.png';
import find3 from './images/5.png';
import find4 from './images/4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function PetSellerAccount({ profilePictureUrl, petIndex, imageUrls }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const pets = useSelector((state) => state.pets);

  //For logout 

  // State to manage which content should be displayed
  const [displayContent, setDisplayContent] = useState('ownerInfo', 'pets');
  //const [isFindDogModalOpen, setIsFindDogModalOpen] = useState(false);

  //Find Dog Button function
  const handleFindDogClick = () => {
    //setIsFindDogModalOpen(true);
    setDisplayContent('findDog');
    setActiveButton('findDog');
  };

  const handleBackClickSearch = () => {
    setDisplayContent('findDog');
  }

  /*const handleCloseFindDogModal = () => {
    setIsFindDogModalOpen(false);
  }; */

  //Logout Button function
  // const handleLogoutClick = () => {
  //   // Handle Logout action
  //   setLoggedIn(false);
  // };

  
  // State to track the login status
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [activeButton, setActiveButton] = useState(null);

  // Logout button click handler
  const handleLogoutClick = () => {
    // Handle Logout action
    setLoggedIn(false);
  };

  // Redirect to login page if not logged in
  if (!loggedIn) {
    navigate('/signin');
  }

  //OwnerAccount Button function
  const handleOwnerAccount = () => {
    setDisplayContent('ownerInfo');
    setActiveButton('ownerInfo');
  };

  useEffect(() => {
    // Set the default active button when the component mounts
    setActiveButton('ownerInfo');
    
  }, []);

  //Pets Button function
  const handlePets = () => {
    setDisplayContent('pets');
    setActiveButton('pets');
  };

  const handleBackClickPets = () => {
    setDisplayContent('pets');
  }

  //Pet Regsiter Button function
  const handleAddPet = () => {
    setDisplayContent('addPet');
    setActiveButton('addPet');
  };

  //Premium Button function
  const handlePremium = () => {
    setDisplayContent('premium');
    setActiveButton('premium');
  };

  //Rules Button function
  const handleRules = () => {
    setDisplayContent('feedback');
    setActiveButton('feedback');
  };

  // Assuming 'user' is the key in your store
  const firstname = useSelector((state) => state.user.firstname); 
  const lastname = useSelector((state) => state.user.lastname);
  const contact = useSelector((state) => state.user.contact);

  // Debugging: Output values to the console
  console.log("firstname:", firstname);
  console.log("lastname:", lastname);
  console.log("contact:", contact);

  //Get the firstname and lastname
  const ownerName = `${firstname} ${lastname}`;

  //For edit function 
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    age: userData.age || '',
    sex: userData.sex || '',
    address: userData.address || '',
    contact: userData.contact || '',
  });

  //Edit button function
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //Save button function
  const handleSaveClick = () => {
    // Perform an action to save the edited data to the server or Redux store
    // Update the local state
    dispatch(updateUserData(editedData));
    setIsEditing(false);
  };

  //Cancel button function
  const handleCancelClick = () => {
    // Reset the editedData and exit editing mode
    setEditedData({
      age: userData.age || '',
      sex: userData.sex || '',
      address: userData.address || '',
      contact: userData.contact || '',
    });
    setIsEditing(false);
  };
  //Upload Images and display 
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleForImageUpload = (e) => {
    const selectedImages = e.target.files;
    const newImages = [];
  
    //Determine the number of image uploaded
    for (let i = 0; i < selectedImages.length; i++) {
      const image = selectedImages[i];
      const imageUrl = URL.createObjectURL(image); // Create a URL for the selected image
      newImages.push(imageUrl);
    }
  
    setUploadedImages(newImages); // Update the uploadedImages state with the image URLs
  };

  //For the UI of find dog page
  const dogImages = [canine1, canine2, canine3]; // Replace with your image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state

  // Handling file change event
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    // Assuming you have a function handleImageUpload that handles the actual upload logic
    handleImageUpload(file)
      .then(() => {
        // Image upload successful, update displayContent state
        setDisplayContent('dogSearch'); // Replace 'otherContent' with the appropriate content identifier
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        // Handle error if needed
      });
  };

  // Clicking the icon for upload image function
  const handleUploadIconClick = () => {
    if (!loading) {
      // Trigger a click event on the hidden file input
      document.getElementById('fileInput').click();
    }
  };
  // Function to change the current image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dogImages.length);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [dogImages]);

  // Assuming you have a function handleImageUpload that handles the actual upload logic
  const handleImageUpload = (file) => {
    // Add your image upload logic here, e.g., using fetch or an API call
    return new Promise((resolve, reject) => {
      // Simulating a delay for demonstration purposes
      setTimeout(() => {
        // Resolve the promise to indicate a successful upload
        resolve();
      }, 2000); // Simulated 2 seconds delay
    });
  };


  // Assuming 'user' is the key in your store
  // const dname = useSelector((state) => state.pets.name); 
  // const dbreed = useSelector((state) => state.pets.breed);
  // const dadd = useSelector((state) => state.pets.address);
  // const dsex = useSelector((state) => state.pets.sex);
  // const dage = useSelector((state) => state.pets.age);
  // const dvaccinated = useSelector((state) => state.pets.vaccinated);
  // const dyear = useSelector((state) => state.pets.year);
  // const dstatus = useSelector((state) => state.pets.status);
  // const dimage = useSelector((state) => state.pets.petImages);

  //Submit button if done editing the information
  const handleSubmitClick = () => {
    const formData = {
      name: editedData.name,
      breed: editedData.breed,
      age: editedData.age,
      sex: editedData.sex,
      rabbiesVac: editedData.rabbiesVac,
      year: editedData.year,
      status: editedData.status,
    };
  
    // Dispatch an action to add the pet to the Redux store
    dispatch(addPet(formData));
  };
  
  
  // Assuming 'user' is the key in your store
  const [selectedPetName, setSelectedPetName] = useState(null);
  const selectedPet = useSelector((state) => state.pets.find((pet) => pet.name === selectedPetName));

  const handlePetClick = (petName) => {
    setSelectedPetName(petName);
    setDisplayContent('petDetails');
  };

  // Function to handle subscription
  const handleSubscribe = (duration) => {
    // Dispatch an action to handle the subscription
    dispatch(subscribeToPremium(duration)); // Pass the selected duration to your action
  };

  const myPetImage = useSelector((state) => state.pets.petImages);

  const handleAddPetWithImages = (petData) => {
    // Dispatch the action to add a pet with all data
    dispatch(addPet(petData));
  
    // Assuming 'imageUrls' is an array of image URLs
    // Replace 'petIndex' with the actual index where you added the pet
    dispatch(updatePetImages(petIndex, imageUrls));
  };
  //For pet account field for nav-bar
  const [activeTab, setActiveTab] = useState('identity');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  //For Feedback function
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle submission logic here
    console.log('Submitted:', { comment, rating });
  };

  return (
    // For the whole code container 
    <div className="pet-owner-account">
      <div className='contain'>
        <div className="row container">
          {/* For the top object */}
          <div className="row rowbot">
            {/* The profile found in top left side  */}
            <div className="col-md-1 col-3 d-bg text-center">
              <img src={me} alt="Profile" className="profile-picture" />
            </div>
            {/* The text in top left side after the profile */}
            <div className="col-md-4 col-9">
              <div className="top-infos text-center">
                <div className="owner-name">{userData.firstname} {userData.lastname}</div>
                <div className='bio'>Fur Seller</div>
              </div>
            </div>
            {/* For the top right object buttons find dog and logout */}
            <div className="col-md-7 col-12 horizontal-buttons right-button text-center">
              <div className="button-container">
                <button onClick={handleFindDogClick} className={`btn find-dog-button ${activeButton === 'findDog' ? 'active custom-btn-primary' : 'btn-light'}`}><img src={crown} alt="icon" className="premuim-picture" />
                  Find Dog
                </button>
                <button onClick={handleLogoutClick} className="logout-button">
                  Logout
                </button>
              </div>

              
              {/* {isFindDogModalOpen && (
                <FindDogModal handleClose={handleCloseFindDogModal} />
                )} */}
            </div>
          </div>
        </div>
    
        {/* Button found in the left side of page that simplify each part */}
        <div className="background">
          <div className="container">
            <div className="row">
              <div className="col-md-3 vertical-buttons left-button">
                <button onClick={handleOwnerAccount} className={`btn owner-button ${activeButton === 'ownerInfo' ? 'active custom-btn-primary' : 'btn-light'}`}>
                  <img src={myuser} alt="User Icon" className='user'/>
                  Account
                </button><br></br>
                <button onClick={handlePets} className={`btn pet-button ${activeButton === 'pets' ? 'active custom-btn-primary' : 'btn-light'}`}>
                  <img src={pet} alt="User Icon" className= 'user'/>
                  Pets
                </button><br></br>
                <button onClick={handleAddPet} className={`btn add-pet-button ${activeButton === 'addPet' ? 'active custom-btn-primary' : 'btn-light'}`}>
                  <img src={reg} alt="User Icon" className='user'/>
                  Register
                </button><br></br>
                <button onClick={handlePremium} className={`btn payment ${activeButton === 'premium' ? 'active custom-btn-primary' : 'btn-light'}`}>
                  <img src={crown} alt="User Icon" className='user'/>
                  Premium
                </button><br></br>
                <button onClick={handleRules} className={`btn rules ${activeButton === 'feedback' ? 'active custom-btn-primary' : 'btn-light'}`}>
                  <img src={star} alt="User Icon" className='user'/>
                  Feedback
                </button><br></br>
              </div>

              {/* Final Space is the container of each button in the left side of the page */}
              <div className="col-md-10 final-space">
                <div className="conts">
                  <div className="bond">
                    {/* For Account button and display its information under its button function */}
                    {displayContent === 'ownerInfo' && (
                      <>
                        <div className="align-items-center owner-info">
                          <div className='row row-acc'>
                            <div className='col-md-3 bg-f'>
                              <div className="face">
                                <img src={me} alt="Profile" className="profile-pic" />
                              </div>
                            </div>

                            <div className='col-md-9 bg-s'>
                              <div className="owner-named"> {ownerName}</div>
                              <div className='fur-parent'>Fur Seller</div>
                            {/* For editing button in Account Button */}
                            {isEditing ? (
                              <>
                                <div className='row '>
                                  <div className='col-md-2 cent-text'>
                                    
                                    <img src={age} alt="User Icon" className='acc-icon'/>
                                    <input
                                      className='acc-inp'
                                      placeholder='Input your Age'
                                      type="text"
                                      value={editedData.age}
                                      onChange={(e) => setEditedData({ ...editedData, age: e.target.value })}
                                      
                                    />

                                    <img src={sex} alt="User Icon" className='acc-icon'/>
                                    <input
                                      className='acc-inp'
                                      type="text"
                                      placeholder='Input your Sex'
                                      value={editedData.sex}
                                      onChange={(e) => setEditedData({ ...editedData, sex: e.target.value })}
                                    />

                                    <img src={address} alt="User Icon" className='acc-icon'/>
                                    <input
                                      type="text"
                                      className='acc-inp'
                                      placeholder='Input your Address'
                                      value={editedData.address}
                                      onChange={(e) => setEditedData({ ...editedData, address: e.target.value })}
                                    />

                                    <img src={number} alt="User Icon" className='acc-icon'/>
                                    <input
                                      className='acc-inp'
                                      type="text"
                                      value={editedData.contact}
                                      onChange={(e) => setEditedData({ ...editedData, contact: e.target.value })}
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                              {/* The information to be dislayed once Account button is clicked */}
                              <div className='row con-owner'>
                                {/* Left column for Age and Sex */}
                                <div className="col-md-4 col-2 the">
                                  <div className="owner-age"><div className='a'>Age:</div> {isEditing ? editedData.age : userData.age}</div>
                                  <div className="owner-sex"><div className='a'>Sex:</div> {isEditing ? editedData.sex : userData.sex}</div>
                                </div>

                                {/* Right column for Address and Contact */}
                                <div className="col-md-4 col-2 the">
                                  <div className="owner-add"><div className='a'>Address:</div> {isEditing ? editedData.address : userData.address}</div>
                                  <div className="owner-contact"><div className='a'>Mobile Number</div> {isEditing ? editedData.contact : userData.contact}</div>
                                </div>                            
                              </div>
                              </>
                            )}
                            
                        
                        
                        {/* Buttons under the Account */}
                        <div className="button-for">
                          {isEditing ? (
                            <>
                              <button className="save" onClick={handleSaveClick}>
                                Save
                              </button>
                              <button className="cancel" onClick={handleCancelClick}>
                                Cancel
                              </button>
                            </>
                          ) : (
                            <button className="edit" onClick={handleEditClick}>
                              Edit
                            </button>
                          )}
                          </div>
                          </div>
                        </div>
                      </div>
                      </>
                    )}

                    {/* For the Pets button found in the left side of the page */}
                    {displayContent === 'pets' && (
                        <div className='forPet mx-auto'>
                          <div className='for-click'>
                            <div className="mx-auto pet-list"><em>Pet List</em></div>
                            <hr></hr>
                            {pets.map((pet) => (
                              <div className="row mx-auto for-pet" key={pet.name} onClick={() => handlePetClick(pet.name)}>
                                <div className="col-md-4">
                                  <img src={happy} className="pet-image" />
                                </div>
                                <div className="col-md-4">
                                  <div className="pet-info">
                                    <div className="dog-name" >{pet.name}</div>
                                    <div className='dog-breed'>{pet.breed}</div>
                                  </div>
                                </div>
                                <div className='col-md-1 mx-auto'>
                                  <div className='dog-status'><strong>{pet.status}</strong></div>
                                </div>

                                {/* <div className='col-md-2 mx-auto'>
                                  <button className='remove'>Delete</button>
                                </div> */}
                                
                              </div>
                            ))}
                          </div>
                        </div>
                    )}

                    {/* Still under the Pet button, the Profile & details of the Pet  */}
                    {displayContent === 'petDetails' && selectedPet && (
                      <div className='row mx-auto petDet'>
                        <div className='for-pet-detail'>
                          <div className='row mx-auto for-top-details'>
                            {/* Back Icon */}
                            <div className='back-pets'>
                              <FontAwesomeIcon
                                icon={faArrowLeft}
                                onClick={() => handleBackClickPets()}
                                className='back-icon'
                              />
                            </div>
                            <div className='col-md-4'>
                              <img src={happy} className='text-align-center pet-profile' />
                            </div>
                            <div className='col-md-4 for-text'>
                              <div className='text-align-center petname'>{selectedPet ? selectedPet.name : ''}</div>
                              <div className='breed'>{selectedPet ? selectedPet.breed : ''}</div></div>
                            </div>
                          </div>
                          {/* Navigation Tabs */}
                        <div className='details'>
                          <ul className='nav nav-tabs'>
                            <li className='nav-item'>
                            <button
                              className={`nav-link ${activeTab === 'identity' ? 'active' : ''}`}
                              onClick={() => handleTabChange('identity')}
                            >
                              Identity
                            </button>
                            </li>
                            <li className='nav-item'>
                            <button
                              className={`nav-link ${activeTab === 'vaccination' ? 'active' : ''}`}
                              onClick={() => handleTabChange('vaccination')}
                            >
                              Vaccination
                            </button>
                            </li>
                            <li className='nav-item'>
                            <button
                              className={`nav-link ${activeTab === 'photos' ? 'active' : ''}`}
                              onClick={() => handleTabChange('photos')}
                            >
                              Photos
                            </button>
                            </li>
                          </ul>

                          {/* Tab Content */}
                          <div className='tab-content mt-3 align-items-center'>
                            {/* Identity Tab */}
                            {activeTab === 'identity' && (
                              <div className='row'>
                                <div className='col-md-4 mx-auto for-pups2'>
                                  <div className='row'>
                                    <div>
                                    <div className='pups'>
                                      <div className='d-age'>Age: <strong>{selectedPet.age}</strong></div>
                                    </div>
                                    <div className='pups'>
                                      <div className='d-address'>Address: <strong>{selectedPet.address}</strong></div>
                                    </div>
                                    </div>
                                      <div className='pups'>
                                        <div className='d-color'>Color: <strong>{selectedPet.color}</strong></div>
                                      </div>
                                      <div className='pups'>
                                        <div className='d-sex'>Sex: <strong>{selectedPet.sex}</strong></div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Vaccination Tab */}
                            {activeTab === 'vaccination' && (
                              <div className='row'>
                                <div className='col-md-4 mx-auto for-pups'>
                                  <div className='pups'>
                                    
                                    <div className='d-rabbies-vacc'>Rabbies Vaccine: <strong>{selectedPet.rabbiesVac}</strong></div>
                                  </div>
                                  <div className='pups'>
                                    <div className='d-rabbies-vacc-year'>If yes, what year: <strong>{selectedPet.year}</strong></div>
                                  </div>
                                  <div className='pups'>
                                    <div className='d-status'>Status: <strong>{selectedPet.status}</strong></div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Photos Tab */}
                            {activeTab === 'photos' && (
                              <div id='photos' className='tab-pane'>
                                {/* Include code to display photos here */}
                              </div>
                            )}
                          </div>
                        </div>
                        
                      </div>
                    )}
      
                    {/* For the dog registration field found at the left side of the page */}
                    {displayContent === 'addPet' && ( 
                      <div className='add-Pet'>
                        <div className='for-pet-bg'>
                          
                          {/* This field has divided in two column left and right*/}
                          <div className='row'>
                            {/* The first column for the left column */}
                            <div className='col-md-3'>
                              <div className='d-left'>

                              </div>

                            </div>
                          
                            {/* The second column for the right side */}
                            <div className='col-md-7 the-dog-con'>
                            <h3 className='reg'>Dog Registration</h3>
                              <div className='row'>
                                {/* The first column in the right column is also divided into two column */}
                                <div className='col-md-6 lleft'>
                                  <label className='pws2'>Name</label>
                                  <textarea
                                    type="text"
                                    className='dog'
                                    placeholder='Dog name'
                                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                                  />
                                  <label className='pws pws1'>Breed</label>
                                  <textarea
                                    type="text"
                                    className="dog"
                                    placeholder='Dog breed'
                                    onChange={(e) => setEditedData({ ...editedData, breed: e.target.value })}
                                  />
                                  <label className='pws'>Address</label>
                                  <textarea
                                    type="text"
                                    className='dog'
                                    placeholder='Dog address'
                                    onChange={(e) => setEditedData({ ...editedData, address: e.target.value })}
                                  />
                                </div>
                                {/* The second column under the right column*/}
                                <div className='col-md-5 dogs'>
                                  <label className='pwss'>Age</label>
                                  <textarea
                                    type="text"
                                    className='dog'
                                    placeholder='Dog age'
                                    onChange={(e) => setEditedData({ ...editedData, age: e.target.value })}
                                  />
                                  <label className='pws3'>Color</label>
                                  <textarea
                                    type="text"
                                    className='dog'
                                    placeholder='Dog color'
                                    onChange={(e) => setEditedData({ ...editedData, color: e.target.value })}
                                  />
                                  <label for="sex" className='sex'>Sex:</label>
                                  <div className='do-sex'>
                                    <select id="sex" name="sex" className='sexs'>
                                    <option>Specify</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    </select></div>
                                </div>
                              </div>
                              <div className='vaccine'>
                              <div className='col for-vac'>
                                <label for="age" className='rab'>Rabbies Vaccine:</label>
                                  <input type="radio" id="rabbiesVac" name="rabbiesVac" value="Vaccinated" className='va'/> Vaccinated
                                  <input type="radio" id="rabbiesVac" name="rabbiesVac" value="Unvaccinated" className='un'/> Unvaccinated
                          
                              </div>    

                                <label for="myCheckbox" className='f-year'>If vaccinated, what year:</label>
                                <select id="year" name="year" className='sel-yr'>
                                  <option>--Year--</option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                </select><br></br>

                                {/* <label for="myCheckbox">Dog status, please specify:</label>
                                <select id="status" name="status">
                                  <option>--Status--</option>
                                  <option value="alive">Alive</option>
                                  <option value="dead">Dead</option>
                                </select> */}

                                {/* The image to be upload */}
                                <label for="imageUpload" className='upl-img'>Upload Image</label>
                                <input
                                  type="file"
                                  id="imageUpload"
                                  name="imageUpload"
                                  accept="image/*"
                                  className='for-image'
                                  multiple
                                  style={{ display: 'none' }}
                                  onChange={handleForImageUpload} // Define a function to handle image uploads
                                />

                                  {/* The image uploaded to be display */}
                                  <div className="uploaded-images">
                                    {uploadedImages.map((url, index) => (
                                      <img key={index} src={url} alt={`Uploaded Image ${index}`} className="uploaded-image" />
                                    ))}
                                  </div>
                                </div>

                                  <button onClick={handleSubmitClick} className='dog-reg-btn'>Submit</button>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* For the premium button */}
                    {displayContent === 'premium' && ( 
                      <div className='for-payment'>
                        <div className='row'>
                          <div className='col-md-6 p-bg'>
                            <div className='prem'>Premium Subscription</div>
                            <div className='message'>Enjoy the full benefits of our premium subscription! Don't miss out on exclusive features and content. Upgrade today and enhance your experience. Your satisfaction is our priority!</div>
                              
                            <div className='mx-auto'>
                              <div className='service'>
                                <img src={check} alt="User Icon" className="sub-check" />
                                Search for dogs as many times as you like
                              </div>
                              <div className='service'>
                                <img src={check} alt="User Icon" className="sub-check" />
                                Download images of lost dogs effortlessly
                              </div>
                              <div className='service'>
                                <img src={check} alt="User Icon" className="sub-check" />
                                Find missing dogs efficiently.
                              </div>
                              <div className='service'>
                                <img src={check} alt="User Icon" className="sub-check" />
                                Obtain essential information to reunite lost dogs with their owners
                              </div>
                              
                            </div>
                            
                          </div>
                          <div className='row col-right'>
                            <div className='col-md-3 mx-auto for-marg'>
                              <div className='a-row'>
                                <div className='month d-p'><strong>12 MONTHS</strong></div>
                                <div className='m-price d-p'><strong>416.66 PHP</strong> /month </div><br></br>
                                <div className='d-price d-p'><em>4,999.92 PHP every </em><strong>12 months</strong> </div>
                                <button onClick={() => handleSubscribe(12)} className='subs-year'>Subscribe Now</button>
                              </div>

                              <div className='b-row'>
                                <div className='d-p'><strong>1 MONTH</strong></div>
                                <div className='d-p'><strong>416.66 PHP</strong> /month</div><br></br>
                                <div className='d-p'><em>416.66 PHP </em><strong>every month</strong> </div>
                                <button onClick={() => handleSubscribe(1)} className='subs-year'>Subscribe Now</button>
                  
                              </div>
                            </div>
                          </div>
                        </div>
                        
                          
                      </div>

                      
                    )}
                    
                    {/* The rules button, whether to pursue or not */}
                    {displayContent === 'feedback' && ( 
                      <div className='for-feed'>
                        <div>
                          <div className='for-feedback'>
                            <h3 className='feed'>Feedback</h3>
                            <form className='form' onSubmit={handleSubmit}>
                            <div>
                              <p className='ques'>How satisfied are you?</p>
                              <div className='row'>
                                <div className="star-container">
                                  <div className='t'>Unsatisfied</div>
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    
                                    <span
                                      key={star}
                                      className={`star ${rating && star <= rating ? 'selected' : ''}`}
                                      onClick={() => handleRatingChange(star)}
                                    >
                                      ★
                                    </span>
                                  ))}
                                  <div className='t'>Satisfied</div>
                                </div>
                              </div>
                              <p className='co'>Your comment:</p>
                              <textarea className='for-area' rows="3" cols="50" placeholder="Enter your comment here" 
                              value={comment}
                              onChange={handleCommentChange}></textarea>
                    
                            </div>

                              <button type='submit' className='fb-btn'>
                                Send
                              </button>
                            </form>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Find dog button and its function in the field */}
                    {displayContent === 'findDog' && ( 
                      <div className='mx-auto find-D'>
                        <div className='mx-auto dogImage'>
                          <img
                            src={dogImages[currentImageIndex]}
                            alt="Dog"
                            className="dog-image"
                          />
                        </div>
                        
                        <input
                          type='file'
                          id='fileInput'
                          className='upload-icon'
                          name='file'
                          onChange={handleFileChange}
                          style={{ display: 'none' }} // Hide the file input
                        />
                        {loading ? ( // Render the loading icon when in loading state
                          <div className='mx-auto'>Please wait...</div>
                        ) : (
                          <img
                            src={upload}
                            alt="Upload Icon"
                            className="upload-icon"
                            onClick={handleUploadIconClick}
                            style={{ cursor: 'pointer' }}
                          />
                        )}
                        
                    </div>
                    )}

                    {displayContent == 'dogSearch' && (
                        <div className='container-dog'>
                        
                          <div className='row'>
                            {/* Back Icon */}
                            <div className='col-md-0 back-search'>
                                <FontAwesomeIcon
                                  icon={faArrowLeft}
                                  onClick={() => handleBackClickSearch()}
                                  className='back-icons'
                                />
                            </div>
                            {/* Left column for image */}
                            <div className='col-md-5 d-flex flex-column align-items-center con-con'>
                              <div className='con-tainer'>
                              <div className='ff'><strong>FOUND!</strong></div>
                              <img className='find-dog-image' src={find4} alt='Dog' />
                              <p className='image-name'>Luna</p>
                              </div>
                            </div>

                            {/* Right column for information */}
                            <div className='col-md-7 d-flex flex-column align-items-center'>
                                <h2 className='title-info'>Owner Information</h2>
                                <div className='row'>
                                  <div className='col-md-1 for-img'>
                                    <img src={ownerPet} className='info-icon i-c'/>
                                    <img src={location} className='info-icon'/>
                                    <img src={mobile} className='info-icon'/>
                                  </div>
                                  <div className='col-md-10 INFORMATION'>
                                    <p className='find-owner-name'>Glen Arcayan</p>
                                    <p className='address'>Barangay Maug Butuan City.</p>
                                    <p className='contact-number'>09183546781</p>
                                </div>
                                <div>
                                      <img src={find1} className='find-imgs'/>
                                      <img src={find2} className='find-imgs'/>

                                    </div>
                                  </div>
                                
                            </div>
                          </div>
                        </div>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}  
export default PetOwnerAccount;