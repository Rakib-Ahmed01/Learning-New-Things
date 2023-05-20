import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { GET_BOOKS } from './BookList';

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

export default function AddBook() {
  // authors
  const { data, error, loading } = useQuery(GET_AUTHORS);

  // add book
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [GET_BOOKS, 'GetBooks'],
  });

  const [bookData, setBookData] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const { name, authorId, genre } = bookData;

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error.message}</div>;
  }

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addedBook = addBook({ variables: { name, genre, authorId } });

    toast.promise(addedBook, {
      loading: 'Adding Book...',
      success: 'Book Added!',
      error: 'Error Adding The Book!',
    });

    setBookData({
      name: '',
      genre: '',
      authorId: '',
    });
  };

  return (
    <div className="w-[98%] mx-auto">
      <h1 className="text-xl font-bold text-center">Add a Book</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto flex flex-col gap-2 mt-2"
      >
        <input
          type="text"
          placeholder="Book name..."
          className="w-full pb-1 pl-1 rounded-sm text-gray-900"
          required
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Genre..."
          className="w-full pb-1 pl-1 rounded-sm text-gray-900"
          required
          name="genre"
          value={genre}
          onChange={handleInputChange}
        />
        <select
          name="authorId"
          className="w-full pb-1 pl-1 rounded-sm text-black"
          required
          value={authorId}
          onChange={handleInputChange}
        >
          <option value="" hidden>
            Select author...
          </option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button className="py-1 bg-teal-500 rounded-sm">Add Book</button>
      </form>
    </div>
  );
}
