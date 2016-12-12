import { FETCH_WHEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_WHEATHER:
      return [action.payload.data, ...state]; //NEVERMUTATE STATE !!!! Alwais return a new state
  }
  return state
}