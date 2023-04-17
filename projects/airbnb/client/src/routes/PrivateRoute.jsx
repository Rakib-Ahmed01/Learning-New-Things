import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/isLoggedIn';

export default function PrivateRoute({ children }) {
  const loggedIn = isLoggedIn();

  return loggedIn ? children : <Navigate to="/login" />;
}
