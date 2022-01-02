import {
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAIL,
} from '../constants/todosConstants';

const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return { loading: true, todos: [] };
    case TODOS_SUCCESS:
      return { loading: false, todos: action.payload };
    case TODOS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
