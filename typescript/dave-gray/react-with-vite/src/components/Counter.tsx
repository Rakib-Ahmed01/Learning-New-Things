import { useReducer } from 'react';

const initialState = { count: 0 };

type ActionType =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count: {count.count}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
        Decrement
      </button>
    </div>
  );
}
