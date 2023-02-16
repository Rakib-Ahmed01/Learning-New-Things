import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductsProvider';

const Home = () => {
  const { products, error, loading } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products?.map((product) => {
        return <ProductCard product={product} key={Math.random()} />;
      })}
    </div>
  );
};

export default Home;
