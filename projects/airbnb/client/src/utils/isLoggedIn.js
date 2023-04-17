import { useSelector } from 'react-redux';

export function isLoggedIn() {
  const user = useSelector((state) => state.auth);

  return user.name && user.email ? true : false;
}
