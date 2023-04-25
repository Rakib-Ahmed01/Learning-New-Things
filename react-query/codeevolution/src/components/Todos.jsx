import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axiosInstance from '../utils/axios';
import Todo from './Todo';

export default function Todos() {
  const [page, setPage] = useState(1);
  // Query
  const { error, data, isLoading, refetch, isFetching, isPreviousData } =
    useQuery({
      queryKey: ['todos', page],
      queryFn: async () => {
        const res = await axiosInstance(`/todos?_page=${page}&_limit=2`);
        return {
          todos: res.data,
          hasMore: res.data[res.data.length - 1].id < 20,
        };
      },
      keepPreviousData: true,
    });

  if (error) {
    return <div>There was an error fetching todos!</div>;
  }

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  return (
    <>
      <button onClick={refetch}>Fetch Todos</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(data.todos || []).map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
      <span>Current page: {page}</span>
      <div>
        <button
          disabled={page === 1 || isFetching}
          onClick={() => {
            setPage((prev) => Math.max(prev - 1, 1));
          }}
        >
          Previous Page
        </button>
        <button
          disabled={isPreviousData || !data?.hasMore}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
