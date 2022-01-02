import axios from 'axios';

import {
  POSTS_REQUESTS,
  POSTS_SUCCESS,
  POSTS_FAIL,
} from '../constants/postConstants';

const displayPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUESTS });

    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    dispatch({ type: POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POSTS_FAIL, payload: error.message });
  }
};

export default displayPosts;
