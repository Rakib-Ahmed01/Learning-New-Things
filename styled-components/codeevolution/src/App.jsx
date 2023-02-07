import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  AnimatedButton,
  Button,
  DarkButton,
  SecondaryButton,
  SubmitButton,
} from './components/styled/Button/Button';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  },
};

const GlobalStyles = createGlobalStyle`
  button{
    font-family: 'karla';
  }
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <br />
      <br />
      <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <br />
      <br />
      <SecondaryButton
        variant="outline"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </SecondaryButton>{' '}
      <br />
      <br />
      <SubmitButton>Submit Button</SubmitButton>
      <br />
      <br />
      <AnimatedButton>Animated Button</AnimatedButton> <br /> <br />
      <DarkButton>Dark Button</DarkButton>
    </ThemeProvider>
  );
}

export default App;
