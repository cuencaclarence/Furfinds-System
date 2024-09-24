import React from 'react';
import check from './images/check.png';
import close from './images/close.png';
import './findDog.css'

function findPetModal({ handleClose }) {
  return (
    <div className="find-pet-modal">
      <div className="modal-content">
        <div className='for-payment'>
            <button onClick={handleClose} className='findPet-button'>
                <img src={close}  className="close" />
            </button>
                    <div className='row'>
                    <div className='col-md-6'>
                        <div className='prems'>Premium Subscription</div>
                        <div className='messages'>Enjoy the full benefits of our premium subscription! Don't miss out on exclusive features and content. Upgrade today and enhance your experience. Your satisfaction is our priority!</div>
                        
                        <div>
                        <div className='serviced'>
                            <img src={check} alt="User Icon" className="sub-check" />
                            Search for dogs as many times as you like
                        </div>
                        <div className='serviced'>
                            <img src={check} alt="User Icon" className="sub-check" />
                            Download images of lost dogs effortlessly
                        </div>
                        <div className='serviced'>
                            <img src={check} alt="User Icon" className="sub-check" />
                            Find missing dogs efficiently.
                        </div>
                        <div className='serviced'>
                            <img src={check} alt="User Icon" className="sub-check" />
                            Obtain essential information to reunite lost dogs with their owners
                        </div>
                        
                        </div>
                        
                    </div>
                    <div className='col-md-4 column-right'>
                        <div className='row'>
                        <div className='a-row'>
                            <div>12 MONTHS</div>
                            <div>416.66 PHP</div><div>/month</div>
                            <div>4,999.92 PHP</div><div>every <div>12</div> months</div>
                            <button className='subs-year'>Subscribe Now</button>
                        </div>

                        <div className='b-row'>
                            <div>1 MONTH</div>
                            <div>416.66 PHP</div><div>/month</div>
                            <div>416.66 PHP</div><div>every month</div>
                            <button className='subs-year'>Subscribe Now</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    
        </div>
                    
      </div>
    </div>
  );
}

export default findPetModal;