import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: true,
  },
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = ui.actions;

export default ui.reducer;
