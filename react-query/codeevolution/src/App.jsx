import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import ParallelQueriesPage from './pages/ParallelQueriesPage';
import TodoPage from './pages/TodoPage';
import TodosPage from './pages/Todos';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}
          id="layout"
        >
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
          <Link to="/parallel-queries">ParallelQueriesPage</Link>
        </div>
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
      {
        path: '/todos/:todoId',
        element: <TodoPage />,
      },
      {
        path: '/parallel-queries',
        element: <ParallelQueriesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
