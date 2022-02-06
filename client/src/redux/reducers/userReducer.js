import { userAT } from '../actionTypes/userAT';

const initialState = { user: { login: false, message: '' } };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAT.NEW_USER: {
      const login = action.payload.login;
      return {
        ...state,
        login,
        message: '', 
      }
    }

    default:
      return state
  }
}
