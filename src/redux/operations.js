import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const addMenu = createAsyncThunk(
  'user/addMenu',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/api/restaurants');

      console.log(response);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
