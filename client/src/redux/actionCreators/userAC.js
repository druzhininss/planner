import { userAT } from '../actionTypes/userAT';

export function userRegistrationAC(payload) {
  return {
    type: userAT.CREATE_USER,
    payload,
  };
};

export function userLoginAC(payload) {
  return {
    type: userAT.LOGIN,
    payload,
  };
};

export function logoutAC() {
  return {
    type: userAT.LOGOUT,
  };
};

export function clearMessageAC() {
  return {
    type: userAT.CLEAR_STATE,
  };
};

export function checkAuth() {
  return {
    type: userAT.CHECK_AUTH,
  };
};
