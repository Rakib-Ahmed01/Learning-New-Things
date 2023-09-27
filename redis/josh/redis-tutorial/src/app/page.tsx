'use client';

import axios from 'axios';
import Link from 'next/link';

const Home = () => {
  const comment = async () => {
    const { data } = await axios.post('/api/comment', {
      text: 'test comment',
      tags: ['tag1'],
    });

    console.log(data);
  };

  return (
    <div className="flex flex-col gap-8 items-start">
      <Link href={'/comments'} prefetch={false}>
        see comments
      </Link>
      <button onClick={comment}>make comment</button>
    </div>
  );
};

export default Home;
