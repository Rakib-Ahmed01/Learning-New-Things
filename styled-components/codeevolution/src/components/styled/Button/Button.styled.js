import styled, { keyframes } from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ variant }) =>
    variant === 'outline' ? '#fff' : '#3F979B'};
  color: ${({ variant }) => (variant === 'outline' ? '#3F979B' : '#fff')};
  border: 1px solid #3f979b;
  cursor: pointer;
  border-radius: 0.1rem;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${({ variant }) =>
    variant === 'outline' ? '#fff' : '#00337C'};
  color: ${({ variant }) => (variant === 'outline' ? '#00337C' : '#fff')};
  border: 1px solid #00337c;
  &:hover {
    background-color: ${({ variant }) =>
      variant === 'outline' ? '#00337C' : '#fff'};
    color: ${({ variant }) => (variant !== 'outline' ? '#00337C' : '#fff')};
  }
`;

export const SubmitButton = styled(Button).attrs({ type: 'submit' })``;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg)
  }
`;

export const AnimatedButton = styled(SecondaryButton)`
  animation: ${rotate} infinite 10s linear;
`;

export const DarkButton = styled(Button)`
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  border: 1px solid ${(props) => props.theme.dark.primary};
`;
