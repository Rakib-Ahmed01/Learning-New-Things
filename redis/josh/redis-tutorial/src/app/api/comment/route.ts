import { redis } from '@/lib/redis';
import { nanoid } from 'nanoid';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { text, tags } = body;

    const commentId = nanoid();

    // add a comment to the list
    await redis.rpush('comments', commentId);

    // add tags to comments
    await redis.sadd(`tags:${commentId}`, tags);

    // add a comment
    await redis.hset(`comments:${commentId}`, {
      text,
      id: commentId,
      tags,
      timestamp: new Date(),
      user: req.cookies.get('userId')?.value,
    });

    return new Response('OK');
  } catch (error) {
    console.log(error);
  }
};
