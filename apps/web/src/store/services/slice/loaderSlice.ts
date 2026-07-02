// services/slice/loaderSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoaderState = {
  // e.g., { menu: true, checkout: false }
  loadingActions: Record<string, boolean>; 
};

const initialState: LoaderState = {
  loadingActions: {},
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string>) => {
      state.loadingActions[action.payload] = true;
    },
    stopLoading: (state, action: PayloadAction<string>) => {
      state.loadingActions[action.payload] = false;
    },
  },
});

export const { startLoading, stopLoading } = loaderSlice.actions;

// Selector to check a specific component's loading state
export const selectIsComponentLoading = (key: string) => 
  (state: { loader: LoaderState }) => !!state.loader.loadingActions[key];

export default loaderSlice.reducer;