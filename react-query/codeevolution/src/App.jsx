import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import TodosPage from './pages/Todos';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/todos',
        element: <TodosPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
