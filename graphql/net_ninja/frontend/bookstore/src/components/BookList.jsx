/* eslint-disable no-unused-vars */
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      genre
    }
  }
`;

export default function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log({ loading, error, data });
  return <div>BookList</div>;
}
