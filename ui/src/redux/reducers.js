import { combineReducers } from 'redux';

const initialState = {
  token: null,
  error: null,
  isAuthenticated: false,
  user: {
    firstName: "",
    lastName: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload,   
        error: null,
        isAuthenticated: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,   
        error: 'Login failed',
        isAuthenticated: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,   
        error: null,
        isAuthenticated: false,
      }
    case 'GET_PROFILE_INFO':
      return {
        ...state,
        error: null,
        user: action.payload,
      }
    case 'GET_PROFILE_FAILURE': 
      return {
        ...state,
        error: 'Get profile failed',
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: reducer,
});

export default rootReducer;
