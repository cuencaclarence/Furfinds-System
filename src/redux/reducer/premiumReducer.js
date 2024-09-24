// premiumReducer.js
import { SUBSCRIBE_TO_PREMIUM } from '../action/premiumAction';

const initialState = {
  subscribed: false,
  subscriptionDuration: null,
};

const premiumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE_TO_PREMIUM:
      return {
        ...state,
        subscribed: true,
        subscriptionDuration: action.payload.duration,
      };
    default:
      return state;
  }
};

export default premiumReducer;