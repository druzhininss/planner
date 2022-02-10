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
