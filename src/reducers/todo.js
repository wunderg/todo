export default (state, action)  => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action);
      return {
      _id: action._id,
      text: action.text,
      completed: false
    }
    case 'TOGGLE_TODO':
     return state._id === action._id ? {...state, completed: !state.completed} : state;
    case 'FETCH_TODOS':
      return action.payload.data;
    case 'DELETE_TODO':
      return state._id !== action.id;
    default:
      return state;
  }
}
