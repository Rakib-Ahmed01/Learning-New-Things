import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axios';

export default function TodoPage() {
  const { todoId } = useParams();

  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['todo', todoId],
    queryFn: async ({ queryKey }) => {
      const res = await axiosInstance(`/todos/${queryKey[1]}`);
      return res.data;
    },
    cacheTime: 30000,
  });

  if (isError) {
    return <div>There was an error fetching todo</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { id, userId, title, completed } = todo || {};

  return (
    <div>
      <p>Id: {id}</p>
      <p>UserId: {userId}</p>
      <p>Title: {title}</p>
      <p>Completed: {completed.toString()}</p>
    </div>
  );
}
