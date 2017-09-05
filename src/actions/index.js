import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  DETECT_ERROR,
  FETCH_USER,
  CHANGE_TAB,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FETCH_TODO,
  CHANGE_SIDEBAR,
  SWITCH_DELETE_TODO_MODAL,
  SWITCH_SIGNIN_MODAL,
  SWITCH_SIGNUP_MODAL,
  SWITCH_PROJECT_EDIT_MODAL,
  SWITCH_PROJECT_NEW_MODAL,
  SWITCH_PROJECT_DELETE_MODAL
} from './types'

const ROOT_URL = 'https://memoriaapi.herokuapp.com/';


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
  localStorage.removeItem('active-tab');
  localStorage.removeItem('active-project');
  localStorage.removeItem('active-todo');
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
        dispatch(detectError('user'));
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
        dispatch(detectError('projects'));
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
        dispatch(detectError('project'));
      });
  }
}

export function createProject(values) {
  return function(dispatch) {
    axios.post(
      `${ROOT_URL}/projects/`,
      values,
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        console.log("response", response)
        if (response.data.status !== 'ng') {
          dispatch({
            type: CREATE_PROJECT,
            payload: response.data
          });
          localStorage.setItem('active-project', response.data.id)
        } else {
          dispatch(detectError('createProject'));
        }
      })
      .catch(() => {
        dispatch(detectError('createTodo'));
      });
  }
}

export function updateProject(id, values) {
  return function(dispatch) {
    axios.put(
      `${ROOT_URL}/projects/${id}`,
      values,
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        console.log("response", response)
        if (response.data.status !== 'ng') {
          dispatch({
            type: UPDATE_PROJECT,
            payload: response.data
          });
          localStorage.setItem('active-project', response.data.id)
        } else {
          dispatch(detectError('updateProject'));
        }
      })
      .catch(() => {
        dispatch(detectError('createTodo'));
      });
  }
}

export function deleteProject(id) {
  return function(dispatch) {
    axios.delete(
      `${ROOT_URL}/projects/${id}`,
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        console.log("response", response)
        if (response.data.status !== 'ng') {
          dispatch({
            type: DELETE_PROJECT,
            payload: response.data
          });
        } else {
          dispatch(detectError('deleteProject'));
        }
      })
      .catch(() => {
        dispatch(detectError('deleteProject'));
      });
  }
}

// for todos

export function createTodo(id, task) {
  return function(dispatch) {
    axios.post(
      `${ROOT_URL}/todos/`,
      {task: task, project_id: id},
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        console.log("response", response)
        if (response.data.status !== 'ng') {
          dispatch({
            type: CREATE_TODO,
            payload: response.data
          });
        } else {
          dispatch(detectError('createTodo'));
        }
      })
      .catch(() => {
        dispatch(detectError('createTodo'));
      });
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    axios.delete(
      `${ROOT_URL}/todos/${id}`,
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        console.log("response", response)
        if (response.data.status !== 'ng') {
          dispatch({
            type: DELETE_TODO,
            payload: response.data
          });
        } else {
          dispatch(detectError('deleteTodo'));
        }
      })
      .catch(() => {
        dispatch(detectError('deleteTodo'));
      });
  }
}

export function updateTodo(id, column, newValue) {
  return function(dispatch) {
    const value = {}
    value[column] = newValue
    axios.put(
      `${ROOT_URL}/todos/${id}`,
      value,
      {headers: {
        'uid': localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        console.log("response", response)
        if (response.data.status !== 'ng') {
          dispatch({
            type: UPDATE_TODO,
            payload: response.data
          });
        } else {
          dispatch(detectError('updateTodo'));
        }
      })
      .catch(() => {
        dispatch(detectError('updateTodo'));
      });
  }
}

export function fetchTodo(id) {
  return {
    type: FETCH_TODO,
    payload: id
  }
}

// error
export function detectError(error = '') {
  return {
    type: DETECT_ERROR,
    payload: `failed to fetch. (${error})`
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: `failed to authorize. (${error})`
  }
}

// page status
export function changeTab(activeTab) {
  localStorage.setItem('active-tab', activeTab)
  return {
    type: CHANGE_TAB,
    payload: activeTab
  }
}

export function switchDeleteTodoModal(open) {
  return {
    type: SWITCH_DELETE_TODO_MODAL,
    payload: open
  }
}

export function switchSignInModal(open) {
  return {
    type: SWITCH_SIGNIN_MODAL,
    payload: open
  }
}

export function switchSignUpModal(open) {
  return {
    type: SWITCH_SIGNUP_MODAL,
    payload: open
  }
}

export function switchProjectNewModal(open) {
  return {
    type: SWITCH_PROJECT_NEW_MODAL,
    payload: open
  }
}

export function switchProjectEditModal(open) {
  return {
    type: SWITCH_PROJECT_EDIT_MODAL,
    payload: open
  }
}

export function switchProjectDeleteModal(open) {
  return {
    type: SWITCH_PROJECT_DELETE_MODAL,
    payload: open
  }
}

export function changeSidebar(open) {
  console.log("open: ", open)
  return {
    type: CHANGE_SIDEBAR,
    payload: open
  }
}
