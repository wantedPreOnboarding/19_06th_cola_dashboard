import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ORDER_SHEET_KEY_MAP } from 'consts/orderSheet';

export interface orderSheetState {
  ids: number[];
  columns: string[];
}

const initialState: orderSheetState = {
  ids: [], //현재 테이블에서 보여줄 엑셀 행들
  columns: Object.keys(ORDER_SHEET_KEY_MAP), // 현재 테이블에서 보여줘야할 컬럼들
};

export const orderSheetSlice = createSlice({
  name: 'orderSheet',
  initialState,
  reducers: {
    renewalIds: (state, action: PayloadAction<orderSheetState['ids']>) => {
      state.ids = action.payload;
    },
    renewalColumns: (state, action: PayloadAction<orderSheetState['columns']>) => {
      state.columns = action.payload;
    },
  },
});
export const { renewalColumns, renewalIds } = orderSheetSlice.actions;

export default orderSheetSlice.reducer;
