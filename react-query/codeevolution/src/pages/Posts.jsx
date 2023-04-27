import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { queryClient } from '../main';
import axiosInstance from '../utils/axios';

export default function Posts() {
  // Posts State
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // Get posts from the cache
  const cachedPosts = queryClient.getQueryData(['posts']);

  // Query
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery(
    ['posts'],
    async () => {
      const res = await axiosInstance('/posts');
      return res.data;
    },
    {
      select: (data) => {
        return (data || []).sort((a, b) => b.id - a.id);
      },
    }
  );

  // Mutation
  const mutation = useMutation({
    mutationFn: (newPost) => axiosInstance.post('/posts', newPost),
    onMutate: async (newTodo) => {
      // Cancel current queries for the posts list
      await queryClient.cancelQueries('posts');

      // Snapshot the previous posts
      const previousPosts = queryClient.getQueryData(['posts']);

      // Add new posts to the posts list cache
      queryClient.setQueryData(['posts'], (prevTodos) => [
        ...prevTodos,
        newTodo,
      ]);

      // Return a context object with the snapshotted value
      return { previousPosts };
    },
    onSuccess: () => {
      setBody('');
      setTitle('');
    },
    onError: (error, newPost, context) => {
      queryClient.setQueriesData('posts', context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error loading posts!</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = mutation.mutateAsync({
      userId: Math.ceil(cachedPosts?.length / 10),
      id: cachedPosts?.length + 1,
      title,
      body,
    });
    toast.promise(post, {
      loading: 'Saving the post...',
      success: 'Post saved!',
      error: "Couldn't save the post!",
    });
    await post;
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h3>Create Post</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Post body..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button disabled={mutation.isLoading}>Create</button>
        </form>
      </div>
      <div>
        <pre>{JSON.stringify(posts, null, 5)}</pre>
      </div>
    </div>
  );
}
