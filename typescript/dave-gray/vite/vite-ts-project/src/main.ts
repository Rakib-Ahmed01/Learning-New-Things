export {};

const form = document.querySelector('#form') as HTMLFormElement;
const input = document.querySelector('#input') as HTMLInputElement;
const submitBtn = document.querySelector('#submit') as HTMLButtonElement;
const todosContainer = document.querySelector('#todos') as HTMLDivElement;

type Todo = {
  id: string;
  text: string;
};

let todos: Todo[] = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = input.value;
  if (!todo) return;

  todos.push({ id: Math.random().toString(16).slice(2), text: todo });

  renderTodos(todos);

  input.value = '';
});

function renderTodos(todos: Todo[]) {
  todosContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();
  todos.forEach((todo, idx) => {
    const p = document.createElement('p');
    // p.innerHTML = `${idx + 1}. ${todo.text} <button onClick="handleDelete('${
    //   todo.id
    // }')">Delete</button>`;

    p.innerHTML = `${idx + 1}. ${todo.text} `;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => handleDelete(todo.id));
    p.appendChild(deleteBtn);

    todosContainer.appendChild(p);

    fragment.appendChild(p);
  });

  todosContainer.appendChild(fragment);
}

function handleDelete(id: string) {
  todos = todos.filter((todo) => {
    return todo.id !== id;
  });
  renderTodos(todos);
}
