import { useGetPostQuery } from '../features/api/apiSlice';

export default function Post() {
  const { isLoading, data: post } = useGetPostQuery(50);

  return <div>Post - {post?.id}</div>;
}
