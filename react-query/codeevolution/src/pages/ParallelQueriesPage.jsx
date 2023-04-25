import useListQueryData from '../hooks/useListQueryData';

export default function ParallelQueriesPage() {
  const { data: users } = useListQueryData({
    queryKey: ['users'],
    url: '/users',
  });

  const { data: todos } = useListQueryData({
    queryKey: ['todos'],
    url: '/todos',
  });

  return (
    <div>
      {users && <pre>{JSON.stringify(users, null, 4)}</pre>}
      {todos && <pre>{JSON.stringify(todos, null, 4)}</pre>}
    </div>
  );
}
