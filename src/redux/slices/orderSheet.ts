import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ortderSheetState {
  ids: number[];
  columns: string[];
}

const initialState: ortderSheetState = {
  ids: [],
  columns: [],
};

export const orderSheetSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // renewalIds: (state, action: PayloadAction<ortderSheetState['ids']>) => {
    //   state.ids = action.payload;
    // },
    // renewalColumns: (state, action: PayloadAction<ortderSheetState['columns']>) => {
    //   state.columns = action.payload;
    // },
  },
});
