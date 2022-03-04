import { plansAT } from "../actionTypes/plansAT";
import { userAT } from "../actionTypes/userAT";

const initialState = { plans: [], message: '', };

export const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO: check all todos and make sort in reducer
    
    case plansAT.PLANS_UPLOADED: {
      const { plans } = action.payload;
      return {
        ...state,
        plans: plans,
      };
    }

    case plansAT.PLANS_SEND: {
      const newPlan = action.payload;
      const plansCopy = [ ...state.plans ];
      const updatedPlans = plansCopy;
      updatedPlans.push(newPlan);

      return {
        ...state,
        plans: updatedPlans,
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
        if (plan.id === action.payload.planId) {
          const updatedPlan = {
            id: action.payload.planId,
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

    case plansAT.PLAN_DELETED: {
      const plansCopy =  [ ...state.plans ];
      const { planId } = action.payload;
      const updatedPlans = plansCopy.filter((plan) => plan.id !== planId)
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
