// Reducers
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import postsReducer from './postReducer';
import usersReducer from './usersReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  posts: postsReducer,
  users: usersReducer,
});

export default allReducers;
