import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { queryClient } from '../main';
import axiosInstance from '../utils/axios';

export default function Todo({ todo }) {
  const [todoData, setTodoData] = useState({
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  });

  const { userId, id, title, completed } = todoData;

  // Mutation
  const { mutate } = useMutation({
    mutationFn: async (data) => axiosInstance.patch(`/todos/${data.id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo', id] });
      alert(`Todo updated successfully`);
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setTodoData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.length) {
      return alert('Please enter todo text');
    }
    mutate({
      ...todo,
      title,
    });
  };

  return (
    <div style={{ margin: '10px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={handleChange}
          disabled
        />{' '}
        <br />
        <input
          type="text"
          name="id"
          value={id}
          onChange={handleChange}
          disabled
        />{' '}
        <br />
        <textarea name="title" value={title} onChange={handleChange} /> <br />
        <input
          type="text"
          name="description"
          value={completed.toString()}
          onChange={handleChange}
          disabled
        />{' '}
        <br />
        <button>Update</button>
      </form>
      <Link to={`/todos/${id}`} style={{ color: 'lightblue' }}>
        Details
      </Link>
    </div>
  );
}
