import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log('Response is not OK:', response);
        throw new Error('Email ou mot de passe invalide');
      }

      const data = await response.json();
      const token = data.body.token;

      localStorage.setItem('token', token);
      /* sessionStorage.setItem('token', token); */
      
      return data;

    } catch (error) {
      
      console.log('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {

      localStorage.removeItem('token'); // suppression des tokens pour la déconnexion
      /* sessionStorage.removeItem('token'); */

      return null;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const getProfileInfo = createAsyncThunk(
  'auth/getProfileInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      
      if (response.ok) {
      
        return data.body;
      } 
    } catch (error) {

      console.log('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);
