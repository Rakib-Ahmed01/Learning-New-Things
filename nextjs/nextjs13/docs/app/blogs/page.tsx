import Link from 'next/link';

export type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function BlogsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogs = (await res.json()) as Blog[];

  return (
    <main>
      <h1 className="text-center">Blogs Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="border border-cyan-500 p-4 m-4">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                {blog.title}
              </h4>
              <p>{blog.body}</p>
              <Link href={`/blogs/${blog.id}`} className={'text-cyan-400'}>
                Details
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
