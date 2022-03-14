import { userAT } from '../actionTypes/userAT';

const initialState = { user: { login: false, message: '', userId: null, username: '' } };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAT.NEW_USER: {
      return {
        ...state,
        user: {
          login: action.payload.login,
          message: '',
          userId: action.payload.userId,
          username: action.payload.username,
        }
      }
    }

    case userAT.REGISTRATION_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          login: action.payload.login,
          message: action.payload.message,
        }
      }
    }

    case userAT.LOGIN_SUCCESS: {
      return {
        ...state,
        user: {
          login: action.payload.login,
          message: '',
          userId: action.payload.userId,
          username: action.payload.username,
        }
      }
    }

    case userAT.LOGIN_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          login: action.payload.login,
          message: action.payload.message,
        }
      }
    }

    case userAT.LOGOUT: {
      return {
        ...state,
        user: {
          login: false,
          message: '',
          userId: null,
          username: '',
        }
      }
    }

    case userAT.CLEAR_STATE: {
      return {
        ...state,
        user: {
          ...state.user,
          message: '',
        }
      }
    }

    case userAT.CHECK_AUTH_RESULT: {
      return {
        ...state,
        user: {
          login: action.payload.login,
          message: '',
          userId: action.payload.userId,
          username: action.payload.username,
        }
      }
    }

    default: {
      return state;
    }
  }
}
