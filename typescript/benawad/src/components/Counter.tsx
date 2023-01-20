import { FC, useRef, useState } from 'react';

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <br />
      <br />
      <input
        ref={inputRef}
        type="text"
        name="name"
        id="name"
        placeholder="enter your name"
      />
    </div>
  );
};
