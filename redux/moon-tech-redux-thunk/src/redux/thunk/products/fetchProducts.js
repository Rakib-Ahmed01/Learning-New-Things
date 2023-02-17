import { loadProduct } from '../../actions/productAction';

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch('http://localhost:3500/products');
    const data = await res.json();
    dispatch(loadProduct(data));
  };
};
