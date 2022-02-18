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
    addId: (state, action: PayloadAction<number>) => {
      state.ids.push(action.payload);
    },
  },
});
export const { addId } = orderSheetSlice.actions;

export default orderSheetSlice.reducer;
