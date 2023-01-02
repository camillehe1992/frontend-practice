import { createSlice } from "@reduxjs/toolkit";

const VALID_EMAIL = "test@test.com";
const VALID_PASS = "password123";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "1",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      localStorage.setItem("isAuthenticated", "1");
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.setItem("isAuthenticated", "0");
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
