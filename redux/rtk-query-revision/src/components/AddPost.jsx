import { useAddPostMutation } from '../features/api/apiSlice';

export default function AddPost() {
  const [addPost, { isLoading: postSaving }] = useAddPostMutation();

  console.log({ postSaving });

  const handleAddPost = async () => {
    try {
      const x = await addPost({
        body: 'post body',
        title: 'post title',
        userId: 1,
      }).unwrap();

      console.log({ x });
    } catch (err) {
      console.log('Failed to save the post', err);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddPost}
        className={`bg-indigo-500 px-4 py-1 text-white`}
      >
        {postSaving ? 'Post Adding...' : 'Add Post'}
      </button>
    </div>
  );
}
