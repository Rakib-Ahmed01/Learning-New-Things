import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Main() {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
