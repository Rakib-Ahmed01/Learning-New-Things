import { useQueries } from '@tanstack/react-query';
import axiosInstance from '../utils/axios';

export default function DynamicParallelQueries({ todoIds = [1, 2, 3, 4, 5] }) {
  const result = useQueries({
    queries: todoIds.map((todoId) => ({
      queryKey: ['todo', todoId],
      queryFn: async () => {
        const res = await axiosInstance(`/todos/${todoId}`);
        return res.data;
      },
    })),
  });

  if (result[0].isError) {
    return <div>There was an error</div>;
  }

  if (result[0].isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>
        {JSON.stringify(
          (result || []).map((data) => data.data),
          null,
          5
        )}
      </pre>
    </div>
  );
}
