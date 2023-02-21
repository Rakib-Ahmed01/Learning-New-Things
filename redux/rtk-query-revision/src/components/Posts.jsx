import { useMemo } from 'react';
import { useGetPostsQuery } from '../features/api/apiSlice';

export default function Posts() {
  const { isLoading, data: posts = [] } = useGetPostsQuery();

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();

    sortedPosts.sort((a, b) => b.id - a.id);

    return sortedPosts.slice(0, 10);
  }, [posts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {sortedPosts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

function Post({ post }) {
  const { body, title, id } = post;

  return (
    <div className="border p-4">
      <h1>{title}</h1>
      <p>{body}</p>
      <a href={`/posts/${id}`}>View More</a>
    </div>
  );
}
