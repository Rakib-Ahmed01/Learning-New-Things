import {
  Burger,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
  rem,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import {
  useClickOutside,
  useDisclosure,
  useScrollIntoView,
} from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => {
  // console.log(
  //   theme.fn.variant({
  //     variant: 'filled',
  //     color: theme.colors.cyan,
  //   })
  // );
  return {
    header: {
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
      borderBottom: 0,
      position: 'relative',
      transitionDuration: '2s',
      transition: 'all',
    },

    inner: {
      height: rem(56),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },

    linksOnMobile: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
      position: 'absolute',
      top: '100%',
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.colors.cyan,
      }).background,
      padding: theme.spacing.sm,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    },

    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },

    link: {
      display: 'block',
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.white,
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background,
          0.1
        ),
      },
    },

    linkLabel: {
      marginRight: rem(5),
    },
  };
});

const links = [
  {
    link: '/about',
    label: 'Features',
  },
  {
    link: '#1',
    label: 'Learn',
    links: [
      {
        link: '/docs',
        label: 'Documentation',
      },
      {
        link: '/resources',
        label: 'Resources',
      },
      {
        link: '/community',
        label: 'Community',
      },
      {
        link: '/blog',
        label: 'Blog',
      },
    ],
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/pricing',
    label: 'Pricing',
  },
  {
    link: '#2',
    label: 'Support',
    links: [
      {
        link: '/faq',
        label: 'FAQ',
      },
      {
        link: '/demo',
        label: 'Book a demo',
      },
      {
        link: '/forums',
        label: 'Forums',
      },
    ],
  },
];

export function HeaderMenuColored() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  const { targetRef, scrollIntoView } = useScrollIntoView();

  const ref = useClickOutside(() => close());

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        key={item.link}
        component="a"
        href={`#${item.link.replace('/', '')}`}
        // onClick={(event) => {
        //   event.preventDefault();
        //   scrollIntoView();
        // }}
        onClick={() => close()}
      >
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{
            exitDuration: 0,
            duration: 2,
            transition: 2000,
            timingFunction: 'ease',
          }}
          // withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              // onClick={(event) => {
              //   event.preventDefault();
              //   console.log(link.label);
              // }}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        to={`/#blog`}
        className={classes.link}
        // onClick={(event) => {
        //   event.preventDefault();
        //   console.log(link.label);
        // }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Header ref={ref} height={56} className={classes.header} mb={50}>
      <Container>
        <div className={classes.inner}>
          <MantineLogo size={28} inverted />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          {opened && <Group className={classes.linksOnMobile}>{items}</Group>}
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}
