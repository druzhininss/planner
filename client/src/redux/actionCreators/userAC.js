import { userAT } from '../actionTypes/userAT';

export function userRegistrationAC(payload) {
  return {
    type: userAT.CREATE_USER,
    payload
  };
}

