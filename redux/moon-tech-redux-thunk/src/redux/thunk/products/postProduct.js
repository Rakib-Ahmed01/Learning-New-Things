import { addProduct } from '../../actions/productAction';

export const postProduct = (product) => {
  return async (dispatch) => {
    const res = await fetch('http://localhost:3500/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    console.log(data);
    dispatch(addProduct(data));
  };
};
