import { Counter } from './components/Counter';
import { TextField } from './components/TextField';

function App() {
  return (
    <div>
      <h1>Bismillah...</h1>
      <TextField
        text="Hello"
        handleChange={(e) => {
          e.preventDefault();
        }}
      />
      <Counter />
    </div>
  );
}

export default App;
