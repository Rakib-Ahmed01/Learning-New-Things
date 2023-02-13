import { comments } from '@/data/comments';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const comment = req.body;
    return res.json(comment);
  }
}
