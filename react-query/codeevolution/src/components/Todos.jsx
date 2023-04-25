import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Todos() {
  const { data: todos } = useQuery({
    suspense: true,
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/todos');
      return res.data;
    },
  });

  return (
    <div>
      <pre>{JSON.stringify(todos, null, 3)}</pre>
    </div>
  );
}
