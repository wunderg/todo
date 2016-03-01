import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const POST_TODO = 'POST_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const nextId = Math.floor(Math.random() * 100);

export function addTodo(text) {
  return {
    type: ADD_TODO,
    _id: nextId,
    text
  };
}

export function toggleTodo(_id) {
  return {
    type: TOGGLE_TODO,
    _id
  };
}

export function fetchTodos() {
  const request = axios.get(`api/task`);
  return {
    type: FETCH_TODOS,
    payload: request
  };
}

export function postTodo(todo) {
  const request = axios.post(`api/task/`, todo);
  return {
    type: POST_TODO,
    payload: request
  };
}

export function deleteTodo(id) {
  const request = axios.delete(`api/task/${id}`);
  return {
    type: DELETE_TODO,
    payload: request
  };
}
