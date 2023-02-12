import useSWR from 'swr';

const fetcher = async (...args) => {
  try {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default function DashboardSWR() {
  const {
    data: dashboardData,
    isLoading,
    error,
  } = useSWR('http://localhost:3500/dashboard', fetcher);

  console.log({ dashboardData, isLoading, error });
  return <div>DashboardSWR</div>;
}
