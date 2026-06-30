import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { apiSlice } from './services/slice/apiSlice';
import { loaderSlice } from './services/slice/loaderSlice';
import { loaderMiddleware } from './middleware/loaderMiddleware';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  loader: loaderSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, loaderMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;