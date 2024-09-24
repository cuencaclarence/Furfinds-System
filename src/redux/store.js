// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer/userReducer';

const initialState = {
  user: {
    firstname: 'Clarence',
    lastname: 'Cuenca',
    contact: '09918816751',
    age: '21 years old',
    sex: 'Male',
    address: 'Pinamanculan',
    profileImages: '/images/me.jpg',
  },
  pets: [
    {
      name: 'Happy',
      breed: 'Japanese Pet',
      age: '2 years old',
      sex: 'Female',
      color: 'Black with white',
      address: 'Purok-5B Pinamanculan',
      rabbiesVac: 'Yes',
      year: '2023',
      status: 'Alive',
      petImages: '/src/images/happy.jpg',
    },
  ],
  premium: {
    subscribed: false,
    subscriptionDuration: null,
  },
};

const rootReducer = combineReducers({
  user: userReducer,
  pets: petReducer,
  premium: premiumReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;