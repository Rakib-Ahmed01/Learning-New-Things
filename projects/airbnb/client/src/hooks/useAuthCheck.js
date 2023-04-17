import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../state/features/auth/authSlice';

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('airbnb-auth'));

    if (user.name && user.email) {
      dispatch(loggedIn(user));
    }
    setAuthChecked(true);
  }, []);

  return authChecked;
}
