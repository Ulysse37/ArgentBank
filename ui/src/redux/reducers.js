import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getProfileInfo } from '../redux/actions';

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
  user: {
    firstName: "",
    lastName: "",
  },
};

const authSlice =  createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.error = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        state.user = null;
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

export default authSlice.reducer;
