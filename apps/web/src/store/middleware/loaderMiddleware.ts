import { Middleware, isAction } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../services/slice/loaderSlice';

export const loaderMiddleware: Middleware = (store) => (next) => (action) => {
  if (isAction(action)) {
    const [sliceName, , status] = action.type.split('/');

    if (sliceName && (status === 'pending' || status === 'fulfilled' || status === 'rejected')) {
      if (status === 'pending') {
        store.dispatch(startLoading(sliceName));
      } else {
        store.dispatch(stopLoading(sliceName));
      }
    }
  }
  return next(action);
};