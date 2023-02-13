import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await fetch(`/api/comments`);
    const data = await res.json();
    setComments(data);
  };

  const createComment = async () => {
    const res = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ id: nanoid(), body: 'This is my comment...' }),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    setComments((comments) => [...comments, data]);
  };

  return (
    <div>
      <h1>Comments</h1>
      <div>
        <button
          onClick={fetchComments}
          className="bg-blue-400 text-white px-4 py-1"
        >
          Fetch Comments
        </button>{' '}
        <button
          onClick={createComment}
          className="bg-blue-400 text-white px-4 py-1"
        >
          Create a Comment
        </button>
      </div>
      {comments.length > 0 &&
        comments.map((comment) => {
          return <p key={comment.id}>{comment.body}</p>;
        })}
    </div>
  );
}
