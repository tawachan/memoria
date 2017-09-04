import { CHANGE_TAB, CHANGE_SIDEBAR, SWITCH_DELETE_TODO_MODAL, SWITCH_SIGNIN_MODAL, SWITCH_SIGNUP_MODAL, UNAUTH_USER, SWITCH_PROJECT_NEW_MODAL, CREATE_PROJECT } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case CHANGE_TAB:
    return { ...state, activeTab: action.payload }
  case CHANGE_SIDEBAR:
    return { ...state, sidebarOpen: action.payload }
  case SWITCH_DELETE_TODO_MODAL:
    return { ...state, deleteTodoModalOpen: action.payload }
  case SWITCH_SIGNIN_MODAL:
    return { ...state, signInModalOpen: action.payload }
  case SWITCH_SIGNUP_MODAL:
    return { ...state, signUpModalOpen: action.payload }
  case SWITCH_PROJECT_NEW_MODAL:
    return { ...state, projectNewModalOpen: action.payload }
  case CREATE_PROJECT:
    return { ...state, projectNewModalOpen: false, sidebarOpen: false }
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
