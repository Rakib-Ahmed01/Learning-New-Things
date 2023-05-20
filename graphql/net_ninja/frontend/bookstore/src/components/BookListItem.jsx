/* eslint-disable no-unused-vars */
import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const GET_SINGLE_BOOK = gql`
  query GetSingleBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        books {
          id
          name
          genre
        }
      }
    }
  }
`;

export default function BookListItem() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SINGLE_BOOK, {
    variables: { id },
  });

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-2 w-[98%]">
      <h2 className="text-xl font-semibold text-center">{data.book.name}</h2>
      <div>
        <p>Name: {data.book.name}</p>
        <p>Genre: {data.book.genre}</p>
        <p>Author: {data.book.author.name}</p>
      </div>
      {data.book.author.books.length > 1 && (
        <div className="mt-2">
          <h4 className="text-lg font-semibold">
            Other books of {data.book.author.name}
          </h4>
          <div className="mt-2 flex flex-col gap-2">
            {data.book.author.books
              .filter((book) => book.name !== data.book.name)
              .map((book) => {
                return (
                  <div
                    className="border border-teal-500 p-2 rounded-sm"
                    key={book.id}
                  >
                    <h2>Book: {book.name}</h2>
                    <p>Genre: {book.genre}</p>
                    <Link
                      to={`/books/${book.id}`}
                      className="underline text-teal-500"
                    >
                      Details
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <Link to={`/books`} className="underline text-teal-500">
        Go Back To Book List
      </Link>
    </div>
  );
}
