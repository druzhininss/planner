import { plansAT } from "../actionTypes/plansAT";
import { userAT } from "../actionTypes/userAT";

const initialState = { plans: [] };

export const plansReducer = (state = initialState, action) => {
  switch (action.type) {

    case plansAT.PLANS_UPLOADED: {
      const { plans } = action.payload;
      return {
        ...state,
        plans: plans,
      };
    }

    // case plansAT.HIDE_USER_PLANS: {
    //   return {
    //     ...state,
    //     plans: [],
    //   }
    // }

    case userAT.LOGOUT: {
      return {
        ...state,
        plans: [],
      };
    }

    default: {
      return state;
    }
  };
};
