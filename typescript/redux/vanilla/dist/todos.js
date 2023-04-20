"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const FETCH_TODOS_START = 'FETCH_TODOS_START';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';
// action creators
const fetchTodosStart = () => {
    return {
        type: FETCH_TODOS_START,
    };
};
const fetchTodosSuccess = (todos) => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    };
};
const fetchTodosFailed = (error) => {
    return {
        type: FETCH_TODOS_FAILED,
        payload: error,
    };
};
const initialState = {
    todos: [],
    loading: false,
    error: null,
};
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_START':
            return {
                todos: [],
                loading: true,
                error: null,
            };
        case 'FETCH_TODOS_SUCCESS':
            return Object.assign(Object.assign({}, state), { todos: [...state.todos, ...action.payload], loading: false });
        case 'FETCH_TODOS_FAILED':
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
const store = (0, redux_1.createStore)(todosReducer, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
const fetchTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const todos = yield res.json();
    return todos;
});
const fetchTodosThunk = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(fetchTodosStart());
        try {
            const todos = yield fetchTodos();
            dispatch(fetchTodosSuccess(todos));
        }
        catch (error) {
            dispatch(fetchTodosFailed(error.message));
        }
    });
};
store.subscribe(() => {
    console.log(store.getState());
    console.log('--------------------------------------------');
});
store.dispatch(fetchTodosThunk());
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
