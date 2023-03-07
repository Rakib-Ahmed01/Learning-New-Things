import { Anchor, Box, Center, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

export default function MyCenter() {
  return (
    <>
      <Center
        maw={320}
        mx="auto"
        p="xs"
        sx={(theme) => ({ color: theme.white })}
        bg="grape.6"
      >
        All elements are in center
      </Center>
      <Anchor href="https://mantine.dev" target="_blank">
        <Center inline>
          <IconArrowLeft size={rem(14)} />
          <Box ml={5}>Back to Mantine website</Box>
        </Center>
      </Anchor>
    </>
  );
}
