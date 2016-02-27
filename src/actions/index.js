export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function increment(number) {
  return {
    type: INCREMENT,
    payload: number
  };
}

export function decrement(number) {
  return {
    type: DECREMENT,
    payload: number
  };
}

export function reset() {
  return {
    type: RESET,
  }
}
