import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorNotify, successNotify } from 'helpers/notification';
import axios from 'axios';

// ${window.location.origin} http://localhost:3001

axios.defaults.baseURL = `${window.location.origin}`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/api/users/register`, credentials);

      return response.data.newUser;
    } catch (e) {
      if (e.response.data === 'Email already in use') {
        errorNotify('Email already in use');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resendVerifyEmail = createAsyncThunk(
  'auth/resendVerifyEmail',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/verify', credentials);

      successNotify(response.data.message);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/api/users/login`, credentials);
      setAuthHeader(response.data._doc.token);
      return response.data._doc;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/api/users/logout');
    clearAuthHeader();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshingUser = createAsyncThunk(
  'auth/refreshingUser',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removePromoAfterOrder = createAsyncThunk(
  'auth/removePromoAfterOrder',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/promo', credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUserPromo = createAsyncThunk(
  'auth/addUserPromo',
  async (credentials, thunkAPI) => {
    return credentials;
  }
);

export const deleteUserPromo = createAsyncThunk(
  'auth/deleteUserPromo',
  async (credentials, thunkAPI) => {
    return credentials;
  }
);
