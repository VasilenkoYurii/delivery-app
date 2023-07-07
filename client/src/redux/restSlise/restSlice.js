import { createSlice } from '@reduxjs/toolkit';
import {
  addMenu,
  addOrder,
  decrementQuantityOrder,
  incrementQuantityOrder,
  makeAnOrder,
  findOrdersByEmail,
  findOrdersByPhone,
} from './operations';
import {
  addQuantityToObjectArray,
  decrementQuantity,
  incrementQuantity,
} from 'helpers/workWithQuantity';
import { errorNotify, successNotify } from 'helpers/notification';

const initialState = {
  restMenu: [],
  userOrder: [],
  findOrders: [],
  user: {},
  activPromo: null,
};

export const restSlice = createSlice({
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
        const arrOrder = JSON.parse(JSON.stringify(state.userOrder));

        if (arrOrder.length !== 0 && arrOrder[0].shop !== payload.shop) {
          errorNotify('You can only choose a product from one store at a time');
          return;
        }
        const updatedOrder = addQuantityToObjectArray([
          ...state.userOrder,
          payload,
        ]);
        state.userOrder = updatedOrder;
        successNotify('Successfully added to shopping cart!');
      })
      .addCase(decrementQuantityOrder.fulfilled, (state, { payload }) => {
        const updatedOrder = decrementQuantity(
          JSON.parse(JSON.stringify(state.userOrder)),
          payload._id
        );
        state.userOrder = updatedOrder;
        successNotify('Successfully increased quantity!');
      })
      .addCase(incrementQuantityOrder.fulfilled, (state, { payload }) => {
        const updatedOrder = incrementQuantity(
          JSON.parse(JSON.stringify(state.userOrder)),
          payload._id
        );
        state.userOrder = updatedOrder;
        successNotify('Successfully reduced quantity!');
      })
      .addCase(makeAnOrder.fulfilled, (state, { payload }) => {
        state.userOrder = [];
        successNotify('Order sent successfully!');
      })
      .addCase(makeAnOrder.rejected, () => {
        errorNotify('Something went wrong');
      })
      .addCase(findOrdersByEmail.fulfilled, (state, { payload }) => {
        state.findOrders = payload;
        if (payload.length === 0) {
          errorNotify('There were no orders from this email!');
        } else {
          successNotify('We managed to find your orders!');
        }
      })
      .addCase(findOrdersByEmail.rejected, () => {
        errorNotify('Something went wrong');
      })
      .addCase(findOrdersByPhone.fulfilled, (state, { payload }) => {
        state.findOrders = payload;
        if (payload.length === 0) {
          errorNotify('There were no orders from this phone!');
        } else {
          successNotify('We managed to find your orders!');
        }
      })
      .addCase(findOrdersByPhone.rejected, () => {
        errorNotify('Something went wrong');
      });
  },
});

export const restReduser = restSlice.reducer;
