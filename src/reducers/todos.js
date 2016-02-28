import { ADD_TODO } from '../actions';
import todo from './todo';

const INITIAL_STATE = [
  {
    id : 1,
    text: 'Hello',
    completed: false
  },
  {
    id : 2,
    text: 'Awesome',
    completed: true
  },
  {
    id : 3,
    text: 'Bye',
    completed: false
  }
];

export default (state = INITIAL_STATE, action) => {
  console.log(todo(undefined, action));
  switch(action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)]
    default:
      return state
  }
}

