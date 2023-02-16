import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductsProvider';

const Cart = () => {
  const { cart, error, loading } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart?.map((product) => {
        return <ProductCard product={product} key={Math.random()} />;
      })}
    </div>
  );
};

export default Cart;
