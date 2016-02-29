import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

let nextId = 4;
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function fetchTodos() {
  const request = axios.get('api/task');
  return {
    type: FETCH_TODOS,
    payload: request
  };
}
