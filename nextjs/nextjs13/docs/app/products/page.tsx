import Product from '@/components/product';

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products?limit=100');
  const products = (await res.json())?.products as Product[];

  return (
    <main>
      <h1 className="text-green-500 text-lg">Products Page</h1>
      <section className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </section>
    </main>
  );
}
