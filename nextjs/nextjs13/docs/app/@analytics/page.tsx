export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function AnalyticsPage() {
  await wait(5000);
  return <div>Analytics Page</div>;
}
