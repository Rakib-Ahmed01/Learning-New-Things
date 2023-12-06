import Link from 'next/link';

export default function Product({ product }: { product: Product }) {
  const { title, description, brand, thumbnail } = product;
  return (
    <Link
      href={`/products/${product.id}`}
      className="border border-gray-200 rounded"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumbnail} alt={title} className="h-60 w-full content-cover" />
      <div className="p-4">
        <div className="flex gap-2 items-center mb-2">
          <h2 className=" text-xl font-medium">{title}</h2>
          <small className="bg-teal-500 px-2 text-white rounded-full">
            {brand}
          </small>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
}
