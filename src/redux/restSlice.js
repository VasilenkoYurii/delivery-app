import { createSlice } from '@reduxjs/toolkit';
import { addMenu, addOrder, decrementQuantityOrder } from './operations';
import {
  addQuantityToObjectArray,
  decrementQuantity,
} from 'helpers/workWithQuantity';

const initialState = {
  restMenu: [],
  userOrder: [],
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
      })
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        const updatedOrder = addQuantityToObjectArray([
          ...state.userOrder,
          payload,
        ]);
        state.userOrder = updatedOrder;
        console.log(JSON.parse(JSON.stringify(state.userOrder)));
      })
      .addCase(addOrder.rejected, () => {
        console.log('wa');
      })
      .addCase(decrementQuantityOrder.fulfilled, (state, { payload }) => {
        const updatedOrder = decrementQuantity(
          JSON.parse(JSON.stringify(state.userOrder)),
          payload._id
        );
        state.userOrder = updatedOrder;
      })
      .addCase(decrementQuantityOrder.rejected, () => {
        console.log('wa');
      });
  },
});
