import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorNotify } from 'helpers/notification';
import axios from 'axios';

// ${window.location.origin} http://localhost:3001

axios.defaults.baseURL = `http://localhost:3001`;

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);

      const response = await axios.post(`/api/users/register`, credentials);

      console.log(response);

      return response.data;
    } catch (error) {
      console.error(error.response.data);
      if (error.response.data === 'Email already in use') {
        errorNotify('Email already in use');
      }
    }
  }
);
