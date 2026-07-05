import { createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
  position: string;
  addingProduct: boolean;
};
type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  user: User | null;
};
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  refreshToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.user = {
        addingProduct: false,
        email: action.payload.email,
        name: action.payload.name,
        position: action.payload.position,
      };
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      document.cookie = "token=; path=/";
    },
    updateToken: (state, action) => {
      state.token = action.payload;
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

export const { loggedIn, loggedOut, showAddProduct, hideAddProduct, updateToken } =
  authSlice.actions;
