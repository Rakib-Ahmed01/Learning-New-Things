import { RouterProvider } from 'react-router-dom';
import Loader from './components/Loader';
import useAuthCheck from './hooks/useAuthCheck';
import { router } from './routes/router';

function App() {
  const authChecked = useAuthCheck();

  return (
    <div className="w-[98%] max-w-[1100px] mx-auto my-2">
      {authChecked ? <RouterProvider router={router} /> : <Loader />}
    </div>
  );
}

export default App;
