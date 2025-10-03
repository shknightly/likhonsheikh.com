import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, useAuth, useUser } from '@clerk/clerk-react';

function Comments({ blogId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`/api/comments?blog_id=${blogId}`);
      const data = await res.json();
      setComments(data);
    };
    fetchComments();
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        blog_id: blogId,
        comment: newComment,
      }),
    });
    setNewComment('');
    // Refresh comments
    const res = await fetch(`/api/comments?blog_id=${blogId}`);
    const data = await res.json();
    setComments(data);
  };

  return (
    <div className="mt-8">
      <h2 className="text-heading-24 mb-4">Comments</h2>
      <SignedIn>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="w-full border rounded-md p-2"
            rows="3"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="submit" className="bg-blue-6 text-white px-4 py-2 rounded-md mt-2">
            Submit
          </button>
        </form>
      </SignedIn>
      <SignedOut>
        <div className="mb-4">
          <p>You must be signed in to comment.</p>
          <SignInButton />
        </div>
      </SignedOut>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="border-b py-2">
            <p className="font-bold">{comment.user_name}</p>
            <p>{comment.comment}</p>
            <p className="text-sm text-gray-500">{new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
