import { CHANGE_TAB, CHANGE_SIDEBAR, SWITCH_DELETE_TODO_MODAL } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case CHANGE_TAB:
    return { ...state, activeTab: action.payload }
  case CHANGE_SIDEBAR:
    return { ...state, sidebarOpen: action.payload }
  case SWITCH_DELETE_TODO_MODAL:
    return { ...state, deleteTodoModalOpen: action.payload }
  default:
    return state;
  }
}
