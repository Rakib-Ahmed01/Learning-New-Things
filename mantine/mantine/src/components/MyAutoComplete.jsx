import { Autocomplete } from '@mantine/core';
import { useState } from 'react';

export default function MyAutoComplete() {
  const [value, setValue] = useState('');
  console.log({ value });
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      onChange={setValue}
    />
  );
}
