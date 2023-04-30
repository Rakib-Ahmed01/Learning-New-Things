import { useRouter } from 'next/router';

export default function Docs() {
  const router = useRouter();

  return (
    <div>
      Docs
      <p>{JSON.stringify(router.asPath.split('/').join(' > '), null, 3)}</p>
    </div>
  );
}
