import { createSlice } from '@reduxjs/toolkit';
import { errorNotify, successNotify } from 'helpers/notification';
import { registerUser, loginUser, logOut, refreshingUser } from './operations';

const initialState = {
  user: {},
  activPromo: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        if (payload === undefined) {
          return;
        }
        successNotify('Registration completed successfully! Confirm mail.');
        state.user = payload;
      })
      .addCase(registerUser.rejected, () => {
        errorNotify('Something went wrong');
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, () => {
        errorNotify('Something went wrong');
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshingUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
