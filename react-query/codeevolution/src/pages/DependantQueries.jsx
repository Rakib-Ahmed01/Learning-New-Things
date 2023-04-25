import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axios';

export default function DependantQueries() {
  const { data: user } = useQuery(['user', 1], async () => {
    const res = await axiosInstance(`/users/${1}`);
    return res.data;
  });

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery(
    ['todos', user?.id],
    async () => {
      const res = await axiosInstance(`/todos?userId_like=${user?.id}`);
      return res.data;
    },
    { enabled: !!user }
  );

  if (isError) {
    return <div>There was an error fetching todos!</div>;
  }

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(todos, null, 5)}</pre>
    </div>
  );
}
