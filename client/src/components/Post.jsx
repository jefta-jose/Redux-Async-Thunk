import { useDispatch } from 'react-redux';
import { deletePost } from '../features/posts/postsSlice';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.post_id));
  };

  return (
    <article className='card' key={post._id}>
      <h3>{post.post_title}</h3>
      <p>{post.post_content.substring(0, 100)}</p>
      <p>Author: {post.author_id}</p>
      <button onClick={handleDelete}>delete</button>
    </article>
  );
};

export default Post;
