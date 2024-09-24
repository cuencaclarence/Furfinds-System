// premiumActions.js
export const SUBSCRIBE_TO_PREMIUM = 'SUBSCRIBE_TO_PREMIUM';

export const subscribeToPremium = (duration) => {
  return {
    type: SUBSCRIBE_TO_PREMIUM,
    payload: { duration },
  };
};