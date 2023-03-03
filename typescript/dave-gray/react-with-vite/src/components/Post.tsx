import { useCounter } from '../contexts/Counter/CounterProvider';
import { Post as PostType } from './Posts';

type PostProps = {
  post: PostType;
};

export default function Post({ post }: PostProps) {
  const counter = useCounter();

  return (
    <div className="border-2 border-teal-500 rounded-sm p-2 m-2 capitalize">
      <h1>
        {post.id}: {post.title} - {counter?.count}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}
