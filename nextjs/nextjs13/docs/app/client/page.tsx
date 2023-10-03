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

  const memo = <T extends (...args: any[]) => ReturnType<T>>(func: T) => {
    const cache = {} as Record<string, any>;
  };

  const calculateFactorial = (number: number) => {
    let fact: number = 1;

    for (let i = 1; i <= number; i++) {
      fact *= i;
    }

    console.log({ fact, number });
  };

  return (
    <div>
      <h1>Client Component</h1>
      <p>{count}</p>
      <button
        onClick={() =>
          debounce(() => {
            setCount((count) => count + 1);
          }, 1000)()
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          debounce(() => {
            setCount((count) => count - 1);
          }, 5000)()
        }
      >
        decrement
      </button>
      <br />
      <button onClick={() => debouncedHandleClick('dfa')}>Click Me</button>
      <br />
      <button onClick={() => calculateFactorial(90)}>
        Calculate Factorial of 90
      </button>
    </div>
  );
}
