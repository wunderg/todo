export const ADD_TODO = 'ADD_TODO';

let nextId = 4;
export function addTodo(text) {
  console.log(text);
  return {
    type: ADD_TODO,
    id: nextId++,
    text: text
  }
}
