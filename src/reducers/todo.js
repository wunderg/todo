export default (state, action)  => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
      id: action.id,
      text: action.text,
      completed: false
    }
    default:
      return state
  }
}
