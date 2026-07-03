import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoaderState = {
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

export const selectIsComponentLoading = (key: string) => 
  (state: { loader: LoaderState }) => !!state.loader.loadingActions[key];

export default loaderSlice.reducer;