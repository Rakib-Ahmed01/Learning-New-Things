import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Blogs() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <Layout>
      <Head>
        <title>Blogs Page</title>
      </Head>
      <main>
        <h1 className="text-2xl my-1 font-bold text-center">Blogs Page</h1>
        <ul className="text-blue-400 underline">
          <li>
            <Link href="/blogs/first-blog">Blog 1</Link>
          </li>
          <li>
            <Link href="/blogs/second-blog" replace>
              Blog 2
            </Link>
          </li>
        </ul>
        <button
          className="bg-blue-400 px-4 py-1 text-white rounded"
          onClick={handleClick}
        >
          Go to home
        </button>
      </main>
    </Layout>
  );
}
