// authActions.js

import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes'; // Import your action types

export const loginUser = (loginData) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER }); // Dispatch an action indicating login is in progress

    try {
      // Perform asynchronous logic, like making an API call
      const response = await api.login(loginData); // Replace 'api.login' with your actual API call

      // Assuming you have logic to check for a successful login
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data }); // Dispatch a success action with data
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: 'Login failed' }); // Dispatch a failure action
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: 'Login failed' }); // Dispatch a failure action in case of an error
    }
  };
};