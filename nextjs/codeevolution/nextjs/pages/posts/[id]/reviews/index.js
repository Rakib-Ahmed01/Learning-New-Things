import Layout from '@/components/layout';
import { useRouter } from 'next/router';

export default function Reviews() {
  const router = useRouter();
  const productId = router.query?.id;
  return (
    <Layout>
      <h1 className="text-2xl my-1 font-bold text-center">
        Reviews for Product Id {productId}
      </h1>
    </Layout>
  );
}
