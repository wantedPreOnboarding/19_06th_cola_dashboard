import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { orderSheetApi } from './services/orderSheet';
import { orderSheetSlice } from './slices/orderSheet';

export const store = configureStore({
  reducer: {
    [orderSheetApi.reducerPath]: orderSheetApi.reducer,
    orderSheet: orderSheetSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(orderSheetApi.middleware),
});

setupListeners(store.dispatch);
