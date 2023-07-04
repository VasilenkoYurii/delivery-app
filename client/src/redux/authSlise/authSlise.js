import { createSlice } from '@reduxjs/toolkit';
import { errorNotify, successNotify } from 'helpers/notification';
import { registerUser } from './operations';

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
      });
  },
});

export const authReducer = authSlice.reducer;
