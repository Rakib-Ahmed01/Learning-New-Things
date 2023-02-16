import { createContext, useContext, useEffect, useReducer } from 'react';
import { productsActionTypes } from '../state/productState/actionTypes';
import { initialState, reducer } from '../state/productState/productsReducer';

export const productsContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: productsActionTypes.pending });
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3500/products');
        const data = await res.json();
        dispatch({ type: productsActionTypes.fulfilled, payload: data });
      } catch (err) {
        console.log({ err });
        dispatch({
          type: productsActionTypes.rejected,
          payload: { error: err },
        });
      }
    };
    fetchProducts();
  }, []);

  const value = { ...state, dispatch };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
}

export const useProducts = () => {
  const value = useContext(productsContext);
  return value;
};
