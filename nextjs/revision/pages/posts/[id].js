// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { useRouter } from 'next/router';

import { axiosInstance } from '@/utils/axios';
import { useState } from 'react';

// export default function PostPage() {
//   const { query } = useRouter();
//   const {
//     data: post = {},
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ['posts', { id: query?.id }],
//     queryFn: async () => {
//       const res = await axios(`http://localhost:3500/posts/${query.id}`);
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>There was an error fetching the posts!</div>;
//   }
//   return (
//     <div>
//       <pre>{JSON.stringify(post, null, 4)}</pre>
//     </div>
//   );
// }

export default function Post({ post }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p onClick={() => setCount(count + 1)}>count: {count}</p>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

export async function getStaticPaths() {
  const { data: posts } = await axiosInstance('/posts');

  return {
    paths: (posts || []).map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { data: post } = await axiosInstance(`/posts/${ctx.params.id}`);

  console.log(`Post: ${ctx.params.id}`);

  return {
    props: {
      post,
    },
  };
}
