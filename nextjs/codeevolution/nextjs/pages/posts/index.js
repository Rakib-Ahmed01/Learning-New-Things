import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Posts({ posts }) {
  console.log(`Inside Posts Conponent ${posts.length}`);
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
              <h3 className="text-lg font-semibold hover:underline capitalize">
                <Link href={`/posts/${post.id}`}>
                  {post.id}: {post.title}
                </Link>
              </h3>
              <p className="capitalize">{post.body}</p>
            </div>
          );
        })}
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts: posts.slice(0, 10),
//     },
//   };
// }

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3500/posts`);
  const posts = await res.json();

  console.log(`Inside Posts getServerSideProps ${posts.length}`);

  return {
    props: {
      posts,
    },
  };
}
