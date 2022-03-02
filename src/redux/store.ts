import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { orderSheetApi } from './services/orderSheet';
import { modalSlice } from './slices/modal';
import { orderSheetSlice } from './slices/orderSheet';

export const store = configureStore({
  reducer: {
    [orderSheetApi.reducerPath]: orderSheetApi.reducer,
    orderSheet: orderSheetSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(orderSheetApi.middleware),
});

setupListeners(store.dispatch);
// RootState type
export type RootState = ReturnType<typeof store.getState>;
// App Dispatch type
export type AppDispatch = typeof store.dispatch;
