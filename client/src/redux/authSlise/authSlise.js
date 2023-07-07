import { createSlice } from '@reduxjs/toolkit';
import { errorNotify, successNotify } from 'helpers/notification';
import {
  registerUser,
  loginUser,
  logOut,
  refreshingUser,
  addUserPromo,
  deleteUserPromo,
  removePromoAfterOrder,
} from './operations';

const initialState = {
  user: {},
  activPromo: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
      })
      .addCase(addUserPromo.fulfilled, (state, { payload }) => {
        state.activPromo = payload;
        successNotify('You successfully activated the promo.');
      })
      .addCase(deleteUserPromo.fulfilled, (state, { payload }) => {
        state.activPromo = null;
        successNotify('You successfully removed the promo.');
      })
      .addCase(removePromoAfterOrder.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
