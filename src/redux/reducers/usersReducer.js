import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAIL,
} from '../constants/usersConstatnts';

const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { loading: true, users: [] };
    case USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
