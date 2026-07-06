import { Middleware, isAction } from '@reduxjs/toolkit'
import { startGlobalLoading, stopGlobalLoading } from '../services/slice/loaderSlice';

export const loaderMiddleware: Middleware = (store) => (next) => (action) => {
  if (isAction(action)) {    
    const status = action.type.split('/').pop(); // Gets 'pending', 'fulfilled', or 'rejected'
    
    if (status === 'pending') {
      store.dispatch(startGlobalLoading());
    } else if (status === 'fulfilled' || status === 'rejected') {
      store.dispatch(stopGlobalLoading());
    }
  }
  return next(action);
}