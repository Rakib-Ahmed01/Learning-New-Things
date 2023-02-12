import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post({ post }) {
  const router = useRouter();

  console.log(`Inside page post id ${post.id}`, new Date(), router.isFallback);

  if (router.isFallback) {
    return (
      <Layout>
        <h1 className="text-2xl my-1 font-bold text-center">Loading...</h1>
      </Layout>
    );
  }

  if (!post.id) {
    return (
      <Layout>
        <h1 className="text-2xl my-1 font-bold text-center">Post Not Found!</h1>
      </Layout>
    );
  }

  console.log(`Inside Post Component ${post.title}`);

  return (
    <Layout>
      <Head>
        <title>{`Post - ${router.query.id}`}</title>
      </Head>
      <main>
        <h1 className="text-2xl my-1 font-bold text-center">
          Post - {router.query.id}
        </h1>
        <div className="p-2 capitalize">
          <h3 className="text-lg font-semibold">{post?.title}</h3>
          <p>{post?.body}</p>
          <Link href="/posts" className="text-blue-400 underline">
            Back to posts page
          </Link>
        </div>
      </main>
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }

// export async function getInitialProps(context) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3500/posts`);
//   const posts = await res.json();
//   const paths = posts.slice(0, 10).map((post) => ({
//     params: {
//       id: `${post.id}`,
//     },
//   }));
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3500/posts/${params.id}`);
//   const post = await res.json();
//   console.log(`Generating page for id ${params.id}`, new Date());

//   if (!post.id) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       post,
//     },
//     revalidate: 10,
//   };
// }

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3500/posts/${params.id}`);
  const post = await response.json();

  console.log(`Inside Post getServerSideProps ${post.title}`);

  res.setHeader('Set-Cookie', ['name=Rakib']);

  return {
    props: {
      post,
    },
  };
}
