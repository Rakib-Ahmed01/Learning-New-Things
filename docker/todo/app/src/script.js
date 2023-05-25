const todoText = document.getElementById('todo');
const saveBtn = document.getElementById('save');
const todoContainer = document.getElementById('todos');

saveBtn.addEventListener('click', async () => {
  const res = await fetch('http://localhost:3000/todos');
  const todos = await res.json();
  const todo = todoText.value;

  if (todo.length === 0) {
    return alert('Please type something...');
  } else if (todos.includes(todo)) {
    return alert(`${todo} already exists...`);
  }
  saveTodo(todo);
});

async function saveTodo(todo) {
  const res = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: todo,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  intialize();
  todoText.value = '';
}

async function intialize() {
  const res = await fetch('http://localhost:3000/todos');
  const todos = await res.json();
  todoContainer.innerText = '';
  todos.map((todo) => {
    const li = document.createElement('li');
    li.innerText = todo.title;
    todoContainer.appendChild(li);
  });
}

intialize();
