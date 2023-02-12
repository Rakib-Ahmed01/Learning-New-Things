import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Todos({ todos }) {
  const [todoList, setTodoList] = useState(todos);
  const router = useRouter();

  const filteredTodo = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?completed=true`
    );
    const data = await res.json();
    setTodoList(data);
    router.push('/todos?completed=true', undefined, { shallow: true });
  };

  console.log(todoList);

  return (
    <div>
      <h1>Todos</h1>
      <button
        className="bg-blue-400 text-white px-4 py-1"
        onClick={filteredTodo}
      >
        Filter Todos
      </button>
      {todoList.map((todo) => {
        return <p key={todo.id}>{`${todo.title} | ${todo.completed}`}</p>;
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { completed } = context.query;
  const queryString = completed ? 'completed=true' : '';
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?${queryString}`
  );
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
}
