import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from '../actions';
import todo from './todo';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(item => todo(item, action));
    case FETCH_TODOS:
      return [...state, action.payload.data[0]];
    default:
      return state;
  }
};
