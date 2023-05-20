import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import BookListItem from './components/BookListItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <AddBook />
        <BookList />
      </>
    ),
  },
  {
    path: '/books',
    element: (
      <>
        <AddBook />
        <BookList />
      </>
    ),
  },
  {
    path: '/books/:id',
    element: <BookListItem />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
