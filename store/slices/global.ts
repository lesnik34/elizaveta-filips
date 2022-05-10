import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateI {
  isHeaderVisible: boolean;
}

const initialState: StateI = {
  isHeaderVisible: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setHeaderVision: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isHeaderVisible: action.payload,
    }),
  },
});

export const { setHeaderVision } = globalSlice.actions;

export default globalSlice.reducer;
