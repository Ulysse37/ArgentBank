import { combineReducers } from 'redux';
/* import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getProfileInfo } from '../redux/actions'; */

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
  user: {
    firstName: "",
    lastName: "",
  },
};

/* const authSlice =  createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.rejected, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        state.user = null; //! A changer ??
      })
      .addCase(getProfileInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getProfileInfo.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer; */

const reducer = (state = initialState, action) => {
  /* console.log('Action :', action); */
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
