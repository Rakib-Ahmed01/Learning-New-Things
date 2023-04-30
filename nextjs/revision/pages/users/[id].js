import { axiosInstance } from '@/utils/axios';

export default function User({ user }) {
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

export async function getServerSideProps({ params }) {
  const { data: user } = await axiosInstance(`/users/${params.id}`);

  console.log(`User: ${params.id}`);

  return {
    props: {
      user,
    },
  };
}
