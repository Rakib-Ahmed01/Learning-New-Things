import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { queryClient } from '../main.jsx';
import axiosInstance from '../utils/axios';

export default function CreateTodo() {
  const [text, setText] = useState('');
  // Query
  // const { data: todos } = useQuery({
  //   queryKey: ['todos'],
  //   queryFn: async () => {
  //     const res = await axiosInstance('/todos');
  //     return (res.data || []).sort((a, b) => b.id - a.id);
  //   },
  // });

  // Mutation
  const { mutate } = useMutation({
    mutationFn: (data) => axiosInstance.post('/todos', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setText('');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return alert('Please enter todo text');
    }

    mutate({
      userId: 10,
      id: Date.now(),
      title: text,
      completed: false,
    });
  };

  return (
    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
      <h3>Create Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Create</button>
      </form>
    </div>
  );
}
