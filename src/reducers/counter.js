import { INCREMENT, DECREMENT, RESET } from '../actions';

const INITIAL_STATE = {
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch(action.type) {
    case INCREMENT:
      return {...state, count: action.payload + 1}
    case DECREMENT:
      return {...state, count: action.payload - 1}
    case RESET:
      return {...state, count: 0}
    default:
      return state
  }
}
