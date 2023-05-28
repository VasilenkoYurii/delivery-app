import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  addMenu,
  addOrder,
  decrementQuantityOrder,
  incrementQuantityOrder,
  makeAnOrder,
} from './operations';
import {
  addQuantityToObjectArray,
  decrementQuantity,
  incrementQuantity,
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
        toast.success('Successfully added to shopping cart!', {
          style: {
            width: '300px',
            height: '50px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(decrementQuantityOrder.fulfilled, (state, { payload }) => {
        const updatedOrder = decrementQuantity(
          JSON.parse(JSON.stringify(state.userOrder)),
          payload._id
        );
        state.userOrder = updatedOrder;
        toast.success('Successfully increased quantity!', {
          style: {
            width: '300px',
            height: '50px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(incrementQuantityOrder.fulfilled, (state, { payload }) => {
        const updatedOrder = incrementQuantity(
          JSON.parse(JSON.stringify(state.userOrder)),
          payload._id
        );
        state.userOrder = updatedOrder;
        toast.success('Successfully reduced quantity!', {
          style: {
            width: '300px',
            height: '50px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(makeAnOrder.fulfilled, (state, { payload }) => {
        state.userOrder = [];

        toast.success('Order sent successfully!', {
          style: {
            width: '300px',
            height: '50px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      })
      .addCase(makeAnOrder.rejected, () => {
        toast.error('Something went wrong', {
          style: {
            width: '300px',
            height: '50px',
            borderRadius: '10px',
            fontSize: '20px',
          },
        });
      });
  },
});
