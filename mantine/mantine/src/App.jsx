import {
  ActionIcon,
  AspectRatio,
  Box,
  Button,
  Container,
  FileInput,
  Flex,
  Grid,
  Image,
  MantineProvider,
  Paper,
  SimpleGrid,
  Slider,
  Space,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  useColorScheme,
  useDisclosure,
  useHotkeys,
  useLocalStorage,
  useScrollIntoView,
  useShallowEffect,
} from '@mantine/hooks';
import {
  ColorSchemeProvider,
  createStyles,
  rem,
  useMantineColorScheme,
} from '@mantine/styles';
import {
  IconBrandTwitter,
  IconMoon,
  IconSun,
  IconUpload,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { HeaderMenuColored } from './components/Header';
import MyAutoComplete from './components/MyAutoComplete';
import MyCenter from './components/MyCenter';
import MyMenu from './components/MyMenu';

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

  useShallowEffect(() => {
    console.log('inside useShallowEffect');
  }, [obj]);

  useHotkeys([['alt+J', () => toggleColorScheme()]]);

  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'));
  };

  const [mark, setmark] = useState(0);

  const { classes } = useStyles({ colorScheme, opened, handlers });

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 20,
  });

  useEffect(() => {
    // Get the hash link from the URL
    const hashLink = window.location.hash;

    // If a hash link is present in the URL, scroll to the corresponding element on the page
    if (hashLink) {
      const element = document.querySelector(hashLink);
      console.log(element);
      if (element) {
        scrollIntoView({ alignment: 'center' });
      }
    }
  }, []);

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
        <Button
          component="a"
          href="#about"
          onClick={() => {
            scrollIntoView({ alignment: 'start' });
          }}
        >
          Go to about section
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
            // leftIcon: {
            //   color: 'blue',
            // },
          })}
          h={50}
          variant="light"
        >
          Follow on Twitter
        </Button>
        <Container>
          <Button fw={'normal'}>Button with Padding</Button>
          <Space h="xs" />
          <Demo />

          <AspectRatio ratio={8 / 4} display="block" mt="xs" mb="xs">
            <Image
              src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
              alt="panda"
              w={'100%'}
              radius="5px"
            />
          </AspectRatio>
          <Paper id="forums" ref={targetRef}>
            <Title order={1}>This is a section</Title>
          </Paper>
          <MyCenter />
          <Title order={3}>Flex:</Title>
          <Flex
            my="xs"
            gap={10}
            wrap="wrap"
            direction={{ base: 'column', sm: 'row' }}
          >
            <Paper
              sx={(theme) => ({
                border: `1px solid ${theme.colors.blue[5]}`,
                flexBasis: '49.3%',
              })}
              p="xs"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum obcaecati ea eius. Provident exercitationem, distinctio
              nemo consectetur eius sapiente quibusdam ipsa facilis aperiam
              quidem?
            </Paper>{' '}
            <Paper
              sx={(theme) => ({
                border: `1px solid ${theme.colors.blue[5]}`,
                flexBasis: '49.3%',
              })}
              p="xs"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum obcaecati ea eius. Provident exercitationem, distinctio
              nemo consectetur eius sapiente quibusdam ipsa facilis aperiam
              quidem?
            </Paper>{' '}
            <Paper
              sx={(theme) => ({
                border: `1px solid ${theme.colors.blue[5]}`,
                flexBasis: '49.3%',
              })}
              p="xs"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum obcaecati ea eius. Provident exercitationem, distinctio
              nemo consectetur eius sapiente quibusdam ipsa facilis aperiam
              quidem?
            </Paper>{' '}
            <Paper
              sx={(theme) => ({
                border: `1px solid ${theme.colors.blue[5]}`,
                flexBasis: '49.3%',
              })}
              p="xs"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatum obcaecati ea eius. Provident exercitationem, distinctio
              nemo consectetur eius sapiente quibusdam ipsa facilis aperiam
              quidem?
            </Paper>
          </Flex>
          <Title order={3}>Grid:</Title>
          <Grid mt={rem(5)} gutter="xs">
            <Grid.Col sm={6} md={4}>
              <Paper
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.blue[5]}`,
                })}
                p="xs"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptatum obcaecati ea eius. Provident exercitationem,
                distinctio nemo consectetur eius sapiente quibusdam ipsa facilis
                aperiam quidem?
              </Paper>
            </Grid.Col>
            <Grid.Col sm={6} md={4}>
              <Paper
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.blue[5]}`,
                })}
                p="xs"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptatum obcaecati ea eius. Provident exercitationem,
                distinctio nemo consectetur eius sapiente quibusdam ipsa facilis
                aperiam quidem?
              </Paper>
            </Grid.Col>
            <Grid.Col sm={6} md={4}>
              <Paper
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.blue[5]}`,
                })}
                p="xs"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptatum obcaecati ea eius. Provident exercitationem,
                distinctio nemo consectetur eius sapiente quibusdam ipsa facilis
                aperiam quidem?
              </Paper>
            </Grid.Col>{' '}
            <Grid.Col sm={6} md={4}>
              <Paper
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.blue[5]}`,
                })}
                p="xs"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptatum obcaecati ea eius. Provident exercitationem,
                distinctio nemo consectetur eius sapiente quibusdam ipsa facilis
                aperiam quidem?
              </Paper>
            </Grid.Col>
          </Grid>
          <Title order={3} my="xs">
            Button:
          </Title>
          <Button fw={'normal'} radius="sm">
            Button
          </Button>
          <MyAutoComplete />
          <FileInput
            icon={<IconUpload size={rem(16)} />}
            placeholder="Pick file"
            label="Your resume"
            accept="png,jpg,svg,jpeg"
            withAsterisk
          />
          <Paper id="blog" ref={targetRef}>
            <Title order={1}>This is contact section</Title>
          </Paper>
          <SimpleGrid cols={2}>
            <Paper>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              rerum possimus dignissimos ad molestias, tempore porro aperiam
              repellat. Dolore necessitatibus praesentium sapiente officiis sed
              enim exercitationem accusantium ab non quae?
            </Paper>{' '}
            <Paper>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              rerum possimus dignissimos ad molestias, tempore porro aperiam
              repellat. Dolore necessitatibus praesentium sapiente officiis sed
              enim exercitationem accusantium ab non quae?
            </Paper>{' '}
            <Paper>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              rerum possimus dignissimos ad molestias, tempore porro aperiam
              repellat. Dolore necessitatibus praesentium sapiente officiis sed
              enim exercitationem accusantium ab non quae?
            </Paper>{' '}
            <Paper>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              rerum possimus dignissimos ad molestias, tempore porro aperiam
              repellat. Dolore necessitatibus praesentium sapiente officiis sed
              enim exercitationem accusantium ab non quae?
            </Paper>
          </SimpleGrid>
          <MyMenu />
        </Container>
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
