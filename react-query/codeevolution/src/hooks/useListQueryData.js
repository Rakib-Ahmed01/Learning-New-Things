import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axios';

// This hook is for fetching list/array of data
export default function useListQueryData({ queryKey, url }) {
  const { data, isLoading, error, fetchStatus, refetch, isFetching, isError } =
    useQuery({
      queryKey: queryKey,
      queryFn: async () => {
        const res = await axiosInstance(url);
        return res.data;
      },
      select: (data) => (data || []).sort((a, b) => b.id - a.id),
      // Set a time for invalidating the cache
      // staleTime: 10000, // in milliseconds
      // refetchOnWindowFocus: false,
      // refetchIntervalInBackground: false,
      refetchOnMount: true,
      // cacheTime: 5000,
      // refetchInterval: 5000,
      // enabled: false,
      onSuccess: (data) => {
        return data;
      },
      onError: (err) => {
        return err;
      },
      onSettled: (dataOrErr) => {
        return dataOrErr;
      },
    });

  return { data, isLoading, error, fetchStatus, refetch, isFetching, isError };
}
