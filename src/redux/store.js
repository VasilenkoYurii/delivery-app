import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './restSlice';

export const store = configureStore({
  reducer: { [userSlice.name]: userSlice.reducer },
});
