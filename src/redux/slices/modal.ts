import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface modalState {
  isOpen: boolean;
  modalId: number;
}

const initialState: modalState = {
  isOpen: false, //모달 열림 여부
  modalId: 0, //모달에 띄워야 하는 데이터 ID
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    renewalOpenState: (state, action: PayloadAction<modalState['isOpen']>) => {
      //   state.isOpen = action.payload;
      state.isOpen = !state.isOpen;
    },
    renewalModalId: (state, action: PayloadAction<modalState['modalId']>) => {
      state.modalId = action.payload;
    },
  },
});
export const { renewalOpenState, renewalModalId } = modalSlice.actions;

export default modalSlice.reducer;
