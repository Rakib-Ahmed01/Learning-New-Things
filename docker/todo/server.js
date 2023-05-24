const todoText = document.getElementById('todo');
const saveBtn = document.getElementById('save');
const todoContainer = document.getElementById('todos');

const todos = ['Docker'];

saveBtn.addEventListener('click', () => {
  const todo = todoText.value;

  if (todo.length === 0) {
    return alert('Please type something...');
  } else if (todos.includes(todo)) {
    return alert(`${todo} already exists...`);
  }
  saveTodo(todo);
});

function saveTodo(todo) {
  const li = document.createElement('li');
  li.innerText = todo;
  todoContainer.appendChild(li);
  todoText.value = '';
  todos.push(todo);
}

function intialize() {
  todos.map((todo) => {
    const li = document.createElement('li');
    li.innerText = todo;
    todoContainer.appendChild(li);
  });
}

intialize();
