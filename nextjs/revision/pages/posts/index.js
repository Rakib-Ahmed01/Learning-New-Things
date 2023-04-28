import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

export default function Posts() {
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/posts');
      return res.data;
    },
  });

  console.log({ posts });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error fetching the posts!</div>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {(posts || []).map((post) => {
        return (
          <div key={post.id} className="border rounded-sm p-2">
            <Link
              className="text-lg font-medium mb-1"
              href={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
