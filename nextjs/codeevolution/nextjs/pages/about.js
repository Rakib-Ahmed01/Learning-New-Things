import Layout from '@/components/layout';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About Page</title>
        </Head>
        <main>
          <h1 className="text-2xl my-1 font-bold text-center">About Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            beatae pariatur! Sit distinctio impedit dolores sed. Modi id minima
            velit! Deleniti culpa quo nulla ipsum nobis architecto ad
            voluptatibus, minus omnis ab, nam est accusantium, numquam similique
            corrupti quidem voluptatum iste corporis amet perspiciatis fugit
            veritatis aliquam. Quaerat, consequatur debitis!
          </p>
        </main>
      </Layout>
    </>
  );
}
