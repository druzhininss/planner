import { plansAT } from "../actionTypes/plansAT";
import { userAT } from "../actionTypes/userAT";

const initialState = { plans: [], message: '', };

export const plansReducer = (state = initialState, action) => {
  switch (action.type) {

    case plansAT.PLANS_UPLOADED: {
      const { plans } = action.payload;
      return {
        ...state,
        plans: plans,
      };
    }

    case plansAT.PLANS_SEND: {
      return {
        ...state,
        message: '',
      }
    }

    case plansAT.PLANS_SEND_ERROR: {
      return {
        ...state,
        message: action.payload,
      };
    }

    case plansAT.PLANS_UPDATED: {
      const stateCopy = { ...state };
      const updatedPlans = stateCopy.plans.map((plan) => {
        if (plan.id === action.payload.id) {
          const updatedPlan = {
            title: action.payload.title,
            description: action.payload.description,
            date: action.payload.date,
          }
          return updatedPlan;
        }
        return plan;
      })
      return {
        ...state,
        plans: updatedPlans,
      }
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
        message: '',
      };
    }

    default: {
      return state;
    }
  };
};
