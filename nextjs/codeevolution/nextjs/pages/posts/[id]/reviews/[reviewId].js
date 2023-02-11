import Layout from '@/components/layout';
import { useRouter } from 'next/router';

export default function Review() {
  const { query } = useRouter();
  return (
    <Layout>
      <h1 className="text-2xl my-1 font-bold text-center">
        Reviews for Product Id {query.id} Review No {query.reviewId}
      </h1>
    </Layout>
  );
}
