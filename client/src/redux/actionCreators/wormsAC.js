import { wormsAT } from "../actionTypes/wormsAT";

export const wormsInitAC = (payload) => {
  return {
    type: wormsAT.WORMS_INIT,
    payload,
  }
}
