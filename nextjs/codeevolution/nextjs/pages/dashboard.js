import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3500/dashboard`);
      const data = await res.json();
      setDashboard(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(dashboard);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}
