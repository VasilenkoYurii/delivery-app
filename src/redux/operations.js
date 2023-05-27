import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const addMenu = createAsyncThunk(
  'user/addMenu',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/api/restaurants');

      // console.log(response);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addOrder = createAsyncThunk(
  'user/addOrder',
  (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);

export const decrementQuantityOrder = createAsyncThunk(
  'user/decrementQuantityOrder',
  (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);
