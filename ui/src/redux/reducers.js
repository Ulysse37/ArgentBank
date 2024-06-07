import { combineReducers } from 'redux';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: 'Login failed',
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
