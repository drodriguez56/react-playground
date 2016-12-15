import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }){
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response =>{ 
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response =>{
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }){
    return (dispatch) => {
      axios.post(`${ROOT_URL}/signup`, { email, password })
        .then(response =>{ 
          dispatch({ type: AUTH_USER });
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/feature');
        })
        .catch(function(response){  
          dispatch(authError('email already exists or pasword was wrong'));
        });
    }

}

export function singoutUser(){
  localStorage.removeItem('token');
  return{ type: UNAUTH_USER }
}

export function authError(error) {
  return{
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage(){
  return (dispatch) => {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
     })
      .then((response)=>{
        dispatch( { type: FETCH_MESSAGE, payload: response.data });
      });

  }
}