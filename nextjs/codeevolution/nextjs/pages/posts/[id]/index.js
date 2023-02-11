import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();
  console.log(router);
  console.log(post);
  return (
    <Layout>
      <Head>
        <title>Post Page</title>
      </Head>
      <main>
        <h1 className="text-2xl my-1 font-bold text-center">Post Page</h1>
        <div className="p-2">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p>{post.body}</p>
          <Link href="/posts" className="text-blue-400 underline">
            Back to posts page
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
