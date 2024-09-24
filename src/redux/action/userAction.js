// userAction.js

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export const signupUser = (userData) => {
  return {
    type: SIGNUP_USER,
    payload: userData,
  };
};

export const loginUser = (credentials) => {
  return {
    type: LOGIN_USER,
    payload: credentials,
  };
};

export const updateUserData = (updatedData) => {
  return {
    type: UPDATE_USER_DATA,
    payload: updatedData,
  };
};
