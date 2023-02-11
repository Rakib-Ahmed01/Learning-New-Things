import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Blogs() {
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
            <Link href="/blogs/second-blog">Blog 2</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
