import styled from 'styled-components';

export const RatingCardWrapper = styled.div`
  border-radius: 2rem;
  width: 100%;
  max-width: 450px;
  min-width: 450px;
  background: hsl(213, 19%, 18%);
  padding: 2.2rem;
`;

export const RatingIconBox = styled.div`
  border-radius: 50%;
  background: hsl(210, 16%, 22%);
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
`;

export const RatingCardTitle = styled.h1`
  color: white;
  margin: 0.5rem 0;
  font-size: 1.8rem;
  letter-spacing: 0.05rem;
  text-align: left;
`;

export const RatingCardPara = styled.p`
  color: hsl(217, 12%, 63%);
  font-size: 17px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Rating = styled(RatingIconBox)`
  background: ${({ selected }) =>
    selected ? 'hsl(25, 97%, 53%)' : ' hsl(210, 16%, 22%)'};
  color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: hsl(25, 97%, 53%);
    transition: all 0.2s;
  }
  &.active {
    background: hsl(25, 97%, 53%);
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  display: inline-block;
  margin: 1rem 0;
  background: hsl(25, 97%, 53%);
  color: white;
  border: none;
  text-align: center;
  padding: 0.8rem 0;
  width: 100%;
  font-size: 'Overpass, sans-serif';
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid hsl(25, 97%, 53%);
  &:hover {
    background: #fff;
    color: hsl(25, 97%, 53%);
    transition: all 0.2s;
    border: 2px solid hsl(25, 97%, 53%);
  }
`;
