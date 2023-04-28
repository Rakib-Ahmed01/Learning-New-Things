export default function Dashboard() {
  return <div>dashboard</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {page}
    </div>
  );
};
