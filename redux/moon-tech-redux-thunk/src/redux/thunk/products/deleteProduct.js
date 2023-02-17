import { removeProduct } from '../../actions/productAction';

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3500/products/${productId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log({ data, productId });
    dispatch(removeProduct(productId));
  };
};
