import { plansAT } from '../actionTypes/plansAT';

export function getUserPlansAC(payload) {
  return {
    type: plansAT.GET_USER_PLANS,
    payload
  };
}

// export function hideUserPlansAC() {
//   return {
//     type: plansAT.HIDE_USER_PLANS,
//   }
// }

export function sendUserPlansAC(payload) {
  return {
    type: plansAT.SEND_USER_PLANS,
    payload
  }
}

export function updateUserPlansAC(payload) {
  return {
    type: plansAT.UPDATE_USER_PLANS,
    payload
  }
}

export function deleteUserPlanAC(payload) {
  return {
    type: plansAT.DELETE_USER_PLAN,
    payload
  }
}
