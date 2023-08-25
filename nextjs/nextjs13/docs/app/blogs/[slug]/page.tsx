import { Blog } from '../page';

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const blog = (await res.json()) as Blog;

  if (!blog?.title) {
    return <p>No blog found</p>;
  }

  return (
    <main>
      <h1 className="text-center">Blog Page</h1>
      <div className="border border-cyan-500 p-4 m-4">
        <h4 className="text-xl font-semibold mb-4 text-cyan-400">
          {blog.title}
        </h4>
        <p>{blog.body}</p>
      </div>
    </main>
  );
}
