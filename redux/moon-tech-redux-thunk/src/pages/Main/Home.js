import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { toggleBrand, toggleStock } from '../../redux/actions/filterAction';
import { fetchProducts } from '../../redux/thunk/products/fetchProducts';

const Home = () => {
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter.filters);

  const { brands, stock } = filters;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const activeClass = 'text-white bg-indigo-500 border-white';

  let content;

  if (products.length === 0) {
    content = <div>No product to show.</div>;
  } else if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status;
        }
        return true;
      })
      .filter((product) => {
        if (brands.length > 0) {
          return brands.includes(product.brand);
        }
        return true;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  } else {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock && activeClass
          }`}
          onClick={() => dispatch(toggleStock())}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand('amd'))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands?.includes('amd') && activeClass
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand('intel'))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands?.includes('intel') && activeClass
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
