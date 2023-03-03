import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Posts from './components/Posts';
import CounterProvider from './contexts/Counter/CounterProvider';

function App() {
  return (
    <>
      <CounterProvider>
        <Counter />
        <Posts />
        <Counter2 />
      </CounterProvider>
    </>
  );
}

export default App;
