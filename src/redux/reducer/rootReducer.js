// rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import your user reducer
import premiumReducer from './premiumReducer';

const rootReducer = combineReducers({
  user: userReducer,
  premium: premiumReducer, // Add your user reducer here
  // Add other reducers if needed
});

export default rootReducer;