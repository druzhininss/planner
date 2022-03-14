import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { plansReducer } from "./plansReducer";

export const rootReducer = combineReducers({
  userReducer,
  plansReducer,
})
