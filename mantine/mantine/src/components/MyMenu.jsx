import {
  Button,
  Center,
  createStyles,
  Menu,
  rem,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colors.blue[7],
  },
  dangerIcon: {
    color: theme.colors.red[7],
  },
}));

export default function MyMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const ref = useClickOutside(() => toggle());

  const { classes } = useStyles();

  console.log(classes);

  return (
    <div>
      <Menu
        // opened={opened}
        sx={(theme) => ({
          margin: rem(8),
        })}
        width={200}
        trigger="hover"
        openDelay={100}
        closeDelay={400}
      >
        <Menu.Target>
          <Center>
            <Button fw={'normal'} radius="xs" onClick={() => toggle()}>
              Toggle Menu
            </Button>
          </Center>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Applications</Menu.Label>
          <Menu.Item
            component={Link}
            to="/settings"
            icon={<IconSettings className={classes.icon} size={14} />}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            component="a"
            href={'/#forums'}
            icon={<IconMessageCircle className={classes.icon} size={14} />}
          >
            Forums
          </Menu.Item>
          <Menu.Item icon={<IconPhoto className={classes.icon} size={14} />}>
            Gallery
          </Menu.Item>
          <Menu.Item
            icon={<IconSearch className={classes.icon} size={14} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Danger Zone</Menu.Label>
          <Menu.Item
            color={'red'}
            icon={
              <IconArrowsLeftRight className={classes.dangerIcon} size={14} />
            }
          >
            Transfer my data
          </Menu.Item>
          <Menu.Item
            color="red"
            icon={<IconTrash className={classes.dangerIcon} size={14} />}
          >
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
