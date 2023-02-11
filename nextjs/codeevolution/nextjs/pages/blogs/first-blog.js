import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function FirstBlog() {
  return (
    <Layout>
      <Head>
        <title>Blog 1</title>
      </Head>
      <main>
        <h1 className="text-2xl mb-5 font-bold text-center">Blog 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam
          eum nesciunt sint voluptatibus cum corporis porro labore? Iste dolorum
          eos eius in adipisci! Placeat, architecto facilis! Reprehenderit ipsa
          laborum expedita provident repellat dignissimos similique architecto
          unde aliquam velit, impedit perferendis molestiae voluptatem cumque
          facere veritatis dolores iste assumenda numquam ipsam voluptates
          molestias soluta quo sequi! Sunt quae nam laboriosam minus, non ad vel
          quo? Aliquam eveniet temporibus fuga ipsa quas perferendis deleniti
          expedita modi. Assumenda ad non accusamus quibusdam. Minus excepturi
          inventore veritatis sed cupiditate deleniti dolor explicabo doloremque
          nisi deserunt velit tenetur quod, aspernatur nobis expedita vitae.
          Distinctio?
        </p>
        <Link className="text-blue-400 underline" href="/blogs">
          Back to blogs page
        </Link>
      </main>
    </Layout>
  );
}
