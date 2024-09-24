// userReducer.js
import { SIGNUP_USER,LOGIN_USER, UPDATE_USER_DATA} from '../action/userAction';

const initialState = {
  firstname: '',
  lastname: '',
  contact: '',
  password: '',
  repassword: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      // Handle user registration
      // Update the state with the user data
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER_DATA: // Handle the new action to update user data
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          ...action.payload,
        },
      };
    case LOGIN_USER:
      // Handle user login
      const { contact, password } = action.payload;
      const user = state.users.find((u) => u.contact === contact && u.password === password);

      return {
        ...state,
        loggedInUser: user,
      };
    default:
      return state;
  }
};



export default userReducer;