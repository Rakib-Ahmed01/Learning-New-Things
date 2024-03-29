import { createBrowserRouter, Link } from 'react-router-dom';
import Main from '../layouts/main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: (
      <div>
        Something went wrong! <br />
        <Link
          to="/"
          className="text-blue-500 hover:underline hover:text-blue-600"
        >
          Go to home
        </Link>
      </div>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
