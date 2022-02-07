import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cardsReducer } from "./cardsReducer";

export const rootReducer = combineReducers({
  userReducer,
  cardsReducer,
})
