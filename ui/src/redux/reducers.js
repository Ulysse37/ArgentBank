import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getProfileInfo, editName ,resetError } from '../redux/actions';

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
        state.token = action.payload;
        state.error = null;
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
      })
      .addCase(editName.fulfilled, (state, action) => {
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
      })
      .addCase(editName.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(resetError, (state) => {
        state.error = null; // quand action déclenchée -> met à jour le state de error à null
      });;
      
  },
});

export default authSlice.reducer;
