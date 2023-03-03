import { useCounter } from '../contexts/Counter/CounterProvider';

export default function Counter2() {
  const counter = useCounter();

  return (
    <div>
      <p>Count: {counter?.count}</p>
      <button onClick={() => counter?.setCount((count) => count + 2)}>
        Increment
      </button>
    </div>
  );
}
