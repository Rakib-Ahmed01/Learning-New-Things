import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axiosInstance from '../utils/axios';

export default function TodoPage() {
  const { todoId } = useParams();
  const queryClient = useQueryClient();
  const { todos } =
    queryClient.getQueryData(['todos', Math.ceil(todoId / 2)]) || {};

  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['todo', todoId],
    queryFn: async ({ queryKey, signal }) => {
      console.log({ signal });
      const res = await axiosInstance(`/todos/${queryKey[1]}`, { signal });
      return res.data;
    },
    cacheTime: 30000,
    // initialData: () => {
    //   const todo = todos.find((todo) => todo.id == todoId);
    //   return todo;
    // },
    placeholderData: () => {
      const todo = todos?.find((todo) => todo.id == todoId);
      return todo;
    },
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
      <p>Completed: {completed?.toString()}</p>
    </div>
  );
}
