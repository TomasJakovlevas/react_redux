import {
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAIL,
} from '../constants/todosConstants';

export const todosRequest = () => {
  return {
    type: TODOS_REQUEST,
  };
};

export const todosSuccess = (data) => {
  return {
    type: TODOS_SUCCESS,
    payload: data,
  };
};

export const todosFail = (err) => {
  return {
    type: TODOS_FAIL,
    payload: err,
  };
};
