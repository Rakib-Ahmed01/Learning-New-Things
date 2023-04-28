import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function PostPage() {
  const { query } = useRouter();
  const {
    data: post = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts', { id: query?.id }],
    queryFn: async () => {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error fetching the posts!</div>;
  }
  return (
    <div>
      <pre>{JSON.stringify(post, null, 4)}</pre>
    </div>
  );
}
