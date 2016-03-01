import { SHOW_ALL } from '../actions/constants.js';

const INITIAL_STATE = {
  todos: [],
  all: true,
  comp: false,
  prog: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
