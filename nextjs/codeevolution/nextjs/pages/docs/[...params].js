import Layout from '@/components/layout';
import { useRouter } from 'next/router';

export default function Docs() {
  const router = useRouter();
  const allParams = router.query.params;
  return (
    <Layout>
      <p>
        Docs
        {allParams?.map((param, idx) => (
          <span key={Math.random()}>
            {allParams?.length === idx ? '' : ' > '}
            {param}
          </span>
        ))}
      </p>
      <h1 className="text-2xl my-1 font-bold text-center">Docs Page</h1>
    </Layout>
  );
}
