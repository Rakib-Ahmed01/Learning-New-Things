import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Posts Page</title>
      </Head>
      <main>
        <h1 className="text-2xl my-1 font-bold text-center">Posts Page</h1>
        {posts.map((post) => {
          return (
            <div key={post.id} className="p-2">
              <h3 className="text-lg font-semibold hover:underline">
                <Link href={`/posts/${post.id}`}>
                  {post.id}: {post.title}
                </Link>
              </h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
