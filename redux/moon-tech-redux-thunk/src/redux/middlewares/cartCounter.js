import { ADD_TO_CART } from '../actionTypes/actionTypes';

export const cartCounter = (store) => (next) => (action) => {
  if (action.type === ADD_TO_CART) {
    const cart = store.getState().products.cart;
    return next({
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    });
  }
  return next(action);
};
