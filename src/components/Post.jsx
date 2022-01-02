import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import displayPosts from '../redux/actions/postsActions';

const Post = () => {
  // Hooks
  // -- state
  const postsData = useSelector((state) => state.posts);

  const { posts, loading, error } = postsData;
  const dispatch = useDispatch();

  // -- side effects
  useEffect(() => {
    dispatch(displayPosts());
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts.slice(0, 5).map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default Post;
