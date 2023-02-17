import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  if (cart.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart
        ?.sort((a, b) => a._id - b._id)
        ?.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
    </div>
  );
};

export default Cart;
