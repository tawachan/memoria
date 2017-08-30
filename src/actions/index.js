import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_PROJECTS, FETCH_PROJECT, FETCH_ERROR, FETCH_USER, CHANGE_TAB, SET_TODO_STATUS } from './types'

const ROOT_URL = 'http://localhost:3000';


// for authentication and user
export function signIn(values, callback) {

  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/sign_in`, values)
      .then(response => {
        dispatch({
          type: AUTH_USER,
          payload: response.data
        });
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        callback();
      })
      .catch(() => {
        dispatch(authError('Auth'));
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
        dispatch({
          type: AUTH_USER,
          payload: response.data
        });
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        callback();
      })
      .catch(response => {
        dispatch(authError('can not create user'));
      })
  }
}

export function fetchUser(values) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/current_user`, {
      headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        dispatch({
          type: FETCH_USER,
          payload: response.data
        });
      })
      .catch(response => {
        dispatch(fetchError('user'));
      })
  }
}
// for prjects
export function fetchProjects() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/projects`, {
      headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
      }
    })
      .then(response => {
        dispatch({
          type: FETCH_PROJECTS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(fetchError('projects'));
      });
  }
}

export function fetchProject(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/projects/${id}`, {
      headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
      }
    })
      .then(response => {
        console.log('executed')
        dispatch({
          type: FETCH_PROJECT,
          payload: response.data
        });
        localStorage.setItem('active-project', response.data.id)
      })
      .catch(() => {
        dispatch(fetchError('project'));
      });
  }
}

// for todos
export function setTodoStatus(id, checked) {
  return function(dispatch) {
    axios.put(
      `${ROOT_URL}/todos/${id}`,
      { status: checked },
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        dispatch({
          type: SET_TODO_STATUS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(fetchError('setTodoStatus'));
      });
  }
}
// error
export function fetchError(error = '') {
  return {
    type: FETCH_ERROR,
    payload: `failed to fetch. (${error})`
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: `failed to authorize. (${error})`
  }
}

export function changeTab(activeTab) {
  localStorage.setItem('active-tab', activeTab)
  return {
    type: CHANGE_TAB,
    payload: activeTab
  }
}
