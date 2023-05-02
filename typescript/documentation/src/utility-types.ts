type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type PartialTodo = Partial<Todo>;

const todo: Required<PartialTodo> = {
  completed: false,
  title: 'dadf',
  description: 'des',
};
