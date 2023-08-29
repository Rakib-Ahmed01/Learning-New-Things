'use client';
import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);

  const debounce = <T extends (...args: any[]) => ReturnType<T>>(
    func: T,
    delay: number
  ) => {
    let timerId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleClick = (something: string) => {
    console.log('clicked', something);
    return 0;
  };

  const debouncedHandleClick = debounce(handleClick, 500);

  return (
    <div>
      <h1>Client Component</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
      <br />
      <button onClick={() => debouncedHandleClick('dfa')}>Click Me</button>
    </div>
  );
}
