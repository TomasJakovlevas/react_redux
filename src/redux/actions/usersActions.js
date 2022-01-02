import axios from 'axios';
import {
  USERS_SUCCESS,
  USERS_REQUEST,
  USERS_FAIL,
} from '../constants/usersConstatnts';

const displayUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_REQUEST });

    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    dispatch({ type: USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USERS_FAIL, payload: error.message });
  }
};

export default displayUsers;
