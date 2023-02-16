import { productsActionTypes } from './actionTypes';

export const initialState = {
  products: [],
  error: null,
  loading: false,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case productsActionTypes.pending:
      return { ...state, loading: true, error: false };
    case productsActionTypes.fulfilled:
      return { ...state, loading: false, products: action.payload };
    case productsActionTypes.rejected:
      return { ...state, loading: false, error: action.payload.error.message };
    case productsActionTypes.addToCart:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
