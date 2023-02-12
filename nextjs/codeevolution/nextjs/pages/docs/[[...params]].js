import Layout from '@/components/layout';
import { useRouter } from 'next/router';

export default function Docs() {
  const router = useRouter();
  const allParams = router.query.params;
  console.log(router.asPath);
  let path = '';
  return (
    <Layout>
      <p>
        Docs
        {allParams?.map((param, idx) => {
          path += `/${param}`;
          return (
            <span key={Math.random()}>
              {allParams?.length === idx ? '' : ' > '}
              <span
                className="hover:underline cursor-pointer"
                onClick={() => {
                  path = path
                    .split('/')
                    .slice(0, idx + 2)
                    .join('/');
                  router.push(`/docs/${path}`);
                  console.log({ path });
                }}
              >
                {param}
              </span>
            </span>
          );
        })}
      </p>
      <h1 className="text-2xl my-1 font-bold text-center">Docs Page</h1>
    </Layout>
  );
}
