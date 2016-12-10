// state argument is not aplication state.
// only the state this reducer is responsable for
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}