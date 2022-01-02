import {
  POSTS_REQUESTS,
  POSTS_SUCCESS,
  POSTS_FAIL,
} from '../constants/postConstants';

const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_REQUESTS:
      return { loading: true, posts: [] };
    case POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case POSTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
