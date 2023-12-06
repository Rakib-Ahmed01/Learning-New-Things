export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = (await res.json()) as Product;
  const { title, description, brand, thumbnail } = product;

  return (
    <main>
      <div className=" max-w-2xl mx-auto border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={title}
          className="h-60 w-full content-cover"
        />
        <div className="p-4">
          <div className="flex gap-2 items-center mb-2">
            <h2 className=" text-xl font-medium">{title}</h2>
            <small className="bg-teal-500 px-2 text-white rounded-full">
              {brand}
            </small>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
