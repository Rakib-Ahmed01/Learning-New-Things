import { wait } from '../@analytics/page';

export default async function TeamPage() {
  await wait(5000);

  throw new Error('Something went wrong on Team Page!');

  return <div>Team Page</div>;
}
