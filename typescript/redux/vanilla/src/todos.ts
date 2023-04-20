import { applyMiddleware, createStore, Dispatch } from 'redux';
import thunk from 'redux-thunk';
const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodosState = {
  todos: Todo[];
  loading: boolean;
  error: null | string;
};

type FetchTodosStartAction = {
  type: typeof FETCH_TODOS_START;
};

type FetchTodosSuccessAction = {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: Todo[];
};

type FetchTodosFailedAction = {
  type: typeof FETCH_TODOS_FAILED;
  payload: string;
};

type TodosAction =
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | FetchTodosFailedAction;

// action creators
const fetchTodosStart = (): FetchTodosStartAction => {
  return {
    type: FETCH_TODOS_START,
  };
};

const fetchTodosSuccess = (todos: Todo[]): FetchTodosSuccessAction => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

const fetchTodosFailed = (error: string): FetchTodosFailedAction => {
  return {
    type: FETCH_TODOS_FAILED,
    payload: error,
  };
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducer = (
  state: TodosState = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case 'FETCH_TODOS_START':
      return {
        todos: [],
        loading: true,
        error: null,
      };
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
        loading: false,
      };
    case 'FETCH_TODOS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(todosReducer, applyMiddleware(thunk));

const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  );
  const todos = await res.json();
  return todos;
};

const fetchTodosThunk = () => {
  return async (dispatch: Dispatch<TodosAction>) => {
    dispatch(fetchTodosStart());
    try {
      const todos = await fetchTodos();
      dispatch(fetchTodosSuccess(todos));
    } catch (error: any) {
      dispatch(fetchTodosFailed(error.message));
    }
  };
};

store.subscribe(() => {
  console.log(store.getState());
  console.log('--------------------------------------------');
});

store.dispatch<any>(fetchTodosThunk());
store.dispatch({
  type: 'FETCH_TODOS_SUCCESS',
  payload: [
    {
      completed: false,
      id: 111,
      title: 'my todo',
      userId: 343,
    },
  ],
});
