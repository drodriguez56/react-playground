import axios from 'axios';
import { FETCH_USERS } from './types';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/users'
export function fetchUsers(){
  
  const request = axios.get(ROOT_URL)

  return{
    type: FETCH_USERS,
    payload: request
  };
}