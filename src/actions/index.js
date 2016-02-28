export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextId = 4;
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextId++,
    text: text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}
