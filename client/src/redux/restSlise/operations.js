import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ${window.location.origin} http://localhost:3001

axios.defaults.baseURL = `${window.location.origin}`;

export const addMenu = createAsyncThunk(
  'restaurant/addMenu',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/api/restaurants');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addOrder = createAsyncThunk(
  'restaurant/addOrder',
  (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);

export const decrementQuantityOrder = createAsyncThunk(
  'restaurant/decrementQuantityOrder',
  (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);

export const incrementQuantityOrder = createAsyncThunk(
  'restaurant/incrementQuantityOrder',
  (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);

export const makeAnOrder = createAsyncThunk(
  'restaurant/makeAnOrder',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/orders', credentials);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const findOrdersByEmail = createAsyncThunk(
  'restaurant/findOrdersByEmail',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/api/orders/byEmail/${credentials}`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const findOrdersByPhone = createAsyncThunk(
  'restaurant/findOrdersByPhone',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/api/orders/byPhone/${credentials}`);

      console.log('response.data');

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
