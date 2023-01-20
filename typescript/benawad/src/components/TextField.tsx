import { ChangeEvent, FC } from 'react';

interface Props {
  text: string;
  fn?: (name: string) => string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<Props> = ({ text, handleChange }) => {
  return (
    <div>
      <input defaultValue={text} onChange={handleChange} />
    </div>
  );
};
