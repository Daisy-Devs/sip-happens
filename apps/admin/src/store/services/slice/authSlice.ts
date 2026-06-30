import { createSlice } from "@reduxjs/toolkit";

type User = {
name: string;
email: string;
position: string;
addingProduct:boolean;
}
type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
};
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    showAddProduct: (state) => {
      if (state.user) {
        state.user.addingProduct = true;
      }
    },
    hideAddProduct: (state) => {
      if (state.user) {
        state.user.addingProduct = false;
      }
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
  