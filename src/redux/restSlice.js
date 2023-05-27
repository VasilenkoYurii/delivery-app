import { createSlice } from '@reduxjs/toolkit';
import { addMenu } from './operations';

const initialState = {
  restMenu: [],
};

export const userSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addMenu.fulfilled, (state, { payload }) => {
        state.restMenu = payload;
      })
      .addCase(addMenu.rejected, () => {
        console.log('wa');
      });
  },
});
