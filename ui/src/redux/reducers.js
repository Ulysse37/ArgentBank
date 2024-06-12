import { combineReducers } from 'redux';

const initialState = {
  token: null,
  /* isLoading: false, */
  error: null,
  isAuthenticated: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload,
        /* isLoading: false, */
        error: null,
        isAuthenticated: true,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        /* isLoading: false, */
        error: 'Login failed',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
