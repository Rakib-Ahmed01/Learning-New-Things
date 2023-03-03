import { createContext, ReactNode, useContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type ValueType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<ValueType | null>(null);

export default function CounterProvider({ children }: Props) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  const value = useContext(CounterContext);
  return value;
};
