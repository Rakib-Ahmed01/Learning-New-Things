import {
  ActionIcon,
  Box,
  Button,
  MantineProvider,
  Paper,
  Slider,
  Text,
  Tooltip,
} from '@mantine/core';
import {
  useColorScheme,
  useDisclosure,
  useHotkeys,
  useLocalStorage,
  useShallowEffect,
} from '@mantine/hooks';
import {
  ColorSchemeProvider,
  createStyles,
  rem,
  useMantineColorScheme,
} from '@mantine/styles';
import { IconBrandTwitter, IconMoon, IconSun } from '@tabler/icons-react';
import { useState } from 'react';
import { HeaderMenuColored } from './components/Header';

const useStyles = createStyles((theme, other) => {
  // console.log(other);
  // console.log(theme.fn.fontStyles());

  // console.log(theme.colorScheme);
  return {
    // button: {
    //   backgroundColor:
    //     theme.colorScheme === 'dark' ? theme.white : theme.colors.cyan[5],
    //   fontWeight: 'normal',
    //   // padding: theme.spacing.md,
    //   // display: 'block',
    //   '&.has-shadow': {
    //     boxShadow: theme.shadows.md,
    //   },
    // },
    myCustomText: {
      ...theme.fn.fontStyles(),
    },
  };
});

function App() {
  // const [theme, setTheme] = useState('light');
  const [opened, handlers] = useDisclosure();
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const obj = {};

  // useEffect(() => {
  //   console.log('inside useEffect');
  // }, [obj]);

  useShallowEffect(() => {
    console.log('inside useShallowEffect');
  }, [obj]);

  useHotkeys([['alt+J', () => toggleColorScheme()]]);

  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));
  };

  const [mark, setmark] = useState(0);

  const { classes } = useStyles({ colorScheme, opened, handlers });

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        disableAnimations
        theme={{
          fontFamily: 'Karla',
          colorScheme,
          primaryColor: 'blue',
          colors: {
            dark: [
              '#d5d7e0',
              '#acaebf',
              '#8c8fa3',
              '#666980',
              '#4d4f66',
              '#34354a',
              '#2b2c3d',
              '#1d1e30',
              '#0c0d21',
              '#01010a',
            ],
          },
        }}
      >
        <HeaderMenuColored />
        <Button
          // className="bg-teal-500 shadow-2xl"
          onClick={() => toggleColorScheme()}
          size="sm"
          radius="lg"
          // styles={(theme) => ({
          //   fontWeight: theme.spacing.md,
          // })}
          sx={(theme) => ({
            boxShadow: theme.shadows.md,
            '&:hover': {
              backgroundColor: 'red',
            },
            // fontWeight: 'normal',
            margin: '0 auto',
          })}
          fw="normal"
          display={'inline-block'}
          mx="auto"
        >
          <Text color="white">Change Theme</Text>
        </Button>
        <Paper
          m={16}
          p={16}
          // shadow="sm"
          className="shadow-md"
          sx={(theme) => ({
            '&:hover': {
              backgroundColor: theme.colors.red[5],
              color: 'white',
            },
            [theme.fn.smallerThan('sm')]: {
              '&:hover': {
                backgroundColor: theme.colors.green[5],
                color: 'white',
              },
            },
          })}
        >
          Alhamdulillah
        </Paper>
        <Button
          // className="bg-indigo-500 text-white font-normal"
          sx={(theme) => ({
            fontWeight: 'lighter',
          })}
        >
          This Button Styled With Tailwind
        </Button>
        <Box
          bg={{ base: 'blue', sm: 'cyan', md: 'indigo' }}
          p="lg"
          // m="xs"
          // color="#fff"
          w={'98%'}
          mt="xs"
          mx="auto"
          sx={(theme) => ({
            borderRadius: rem(2),
            color: 'white',
          })}
        >
          This is a box
          <Slider
            color={'cyan'}
            styles={{ thumb: { backgroundColor: 'blue' } }}
            value={mark}
            onChange={setmark}
            marks={[
              { value: 0 },
              { value: 25 },
              { value: 50 },
              { value: 75 },
              { value: 100 },
            ]}
          />
        </Box>
        <Button
          leftIcon={<IconBrandTwitter />}
          m="xs"
          display={'inline-block'}
          fw="normal"
          // sx={(theme) => ({
          //   padding: theme.spacing.xs,
          // })}
          styles={(theme) => ({
            root: {
              // paddingTop: rem(16),
              // height: rem(42),
              padding: `0 ${rem(30)}`,
            },
            leftIcon: {
              color: 'yellow',
            },
          })}
          h={50}
        >
          Follow on Twitter
        </Button>
        <Demo />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';

  return (
    <Tooltip label="Toggle Theme">
      <ActionIcon
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
      >
        {dark ? <IconMoon /> : <IconSun />}
      </ActionIcon>
    </Tooltip>
  );
}
