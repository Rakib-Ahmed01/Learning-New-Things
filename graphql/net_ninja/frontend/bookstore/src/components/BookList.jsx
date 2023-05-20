/* eslint-disable no-unused-vars */
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const GET_BOOKS = gql`
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

  let content;

  if (loading) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Error: {error.message}</div>;
  }

  if (data) {
    content = data.books.map((book) => {
      return (
        <div className="border border-teal-500 p-2 rounded-sm" key={book.id}>
          <h2 className="font-semibold">Book: {book.name}</h2>
          <p>Genre: {book.genre}</p>
          <Link to={`/books/${book.id}`} className="underline text-teal-500">
            Details
          </Link>
        </div>
      );
    });
  }

  return (
    <div className="max-w-5xl mx-auto mt-5 w-[98%]">
      <h2 className="text-xl font-bold text-center my-2">BookList</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {content}
      </div>
    </div>
  );
}
