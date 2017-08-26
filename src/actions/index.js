import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types'

const ROOT_URL = 'http://localhost:3000';

export function signIn(values, callback) {

  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/sign_in`, values)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        callback();
      })
      .catch(() => {
        dispatch(authError("this is error"));
      })
  }
}

export function signOut() {
  localStorage.removeItem('uid');
  localStorage.removeItem('access-token');
  localStorage.removeItem('client');
  return {
    type: UNAUTH_USER
  }
}

export function signUp(values, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth`, values)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        callback();
      })
      .catch(response => {
        dispatch(authError("can not create user"));
      })
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}