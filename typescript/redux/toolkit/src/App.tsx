import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './app/store';
import { decrement, increment, reset } from './features/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment(5));
  };

  const handleDecrement = () => {
    dispatch(decrement(5));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <h1>Redux Toolkit With TypeScript</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
