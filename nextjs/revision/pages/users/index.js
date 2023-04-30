import { axiosInstance } from '@/utils/axios';
import Link from 'next/link';

export default function Users({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="border border-cyan-400 my-2 p-2">
            <Link href={`/users/${user.id}`}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { data: users } = await axiosInstance('/users');

  return {
    props: {
      users,
    },
  };
}
