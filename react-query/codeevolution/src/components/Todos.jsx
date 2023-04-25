import useTodosQueryData from '../hooks/useListQueryData';
import Todo from './Todo';

export default function Todos() {
  // Query
  const {
    error,
    data: todos,
    isFetching,
    isLoading,
    fetchStatus,
    refetch,
  } = useTodosQueryData({ queryKey: ['todos'], url: '/todos' });

  if (error) {
    return <div>There was an error fetching todos!</div>;
  }

  if ((isLoading || isFetching) && fetchStatus !== 'idle') {
    return <div>Loading todos...</div>;
  }

  return (
    <>
      <button onClick={refetch}>Fetch Todos</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(todos || []).map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </>
  );
}
