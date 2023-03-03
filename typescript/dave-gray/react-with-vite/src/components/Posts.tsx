import { useEffect, useState } from 'react';
import Post from './Post';

export type Post = {
  userId: number;
  id: number;
  body: string;
  title: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
