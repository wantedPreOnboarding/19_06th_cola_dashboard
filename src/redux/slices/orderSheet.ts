import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';

export interface ortderSheetState {
  ids: number[];
  columns: string[];
}

const initialState: ortderSheetState = {
  ids: [],
  columns: Object.values(ORDER_SHEET_KEY_MAP),
};

export const orderSheetSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // renewalIds: (state, action: PayloadAction<ortderSheetState['ids']>) => {
    //   state.ids = action.payload;
    // },
    renewalColumns: (state, action: PayloadAction<ortderSheetState['columns']>) => {
      state.columns = action.payload;
    },
  },
});
export const { renewalColumns } = orderSheetSlice.actions;

export default orderSheetSlice.reducer;
