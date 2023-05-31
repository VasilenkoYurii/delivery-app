import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `${window.location.origin}/api`;

export const addMenu = createAsyncThunk(
  'user/addMenu',
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

export const incrementQuantityOrder = createAsyncThunk(
  'user/incrementQuantityOrder',
  (credentials, thunkAPI) => {
    try {
      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);

export const makeAnOrder = createAsyncThunk(
  'user/makeAnOrder',
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
  'user/findOrdersByEmail',
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
  'user/findOrdersByPhone',
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
