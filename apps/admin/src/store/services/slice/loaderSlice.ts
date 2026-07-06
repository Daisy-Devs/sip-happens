import { createSlice } from "@reduxjs/toolkit";

type LoaderState = {
  isGlobalLoading: boolean;
};

const initialState: LoaderState = {
  isGlobalLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startGlobalLoading: (state) => {
      state.isGlobalLoading = true;
    },
    stopGlobalLoading: (state) => {
      state.isGlobalLoading = false;
    },
  },
});

export const { startGlobalLoading, stopGlobalLoading } = loaderSlice.actions;

// Selector to use anywhere in your app layouts
export const selectIsGlobalLoading = (state: { loader: LoaderState }) =>
  state.loader.isGlobalLoading;

export default loaderSlice.reducer;