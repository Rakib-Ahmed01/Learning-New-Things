import { Button, MantineProvider, Text } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.white : theme.colors.cyan[5],
    // fontWeight: 'normal',
    // padding: theme.spacing.md,
    // display: 'block',
  },
}));

function App() {
  const [theme, setTheme] = useState('light');

  const { classes } = useStyles();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Karla',
        colorScheme: theme,
        shadows: {
          xs: '0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.3)',
          sm: '0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.4)',
          md: '0.1875rem 0.1875rem 0.0625rem rgba(0, 0, 0, 0.4)',
          lg: '0.1875rem 0.1875rem 0.0625rem 0.5rem rgba(0, 0, 0, 0.4)',
          xl: '0.1875rem 0.1875rem 0.0625rem 1rem rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <Text>Bismillah...</Text>
      <Button
        className={classes.button}
        onClick={() =>
          setTheme((theme) => (theme === 'dark' ? 'ligth' : 'dark'))
        }
        size="sm"
        radius="lg"
        color="cyan"
        styles={(theme) => ({
          fontWeight: 'normal',
        })}
      >
        Change Theme
      </Button>
    </MantineProvider>
  );
}

export default App;
