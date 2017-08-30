import { CHANGE_TAB, CHANGE_SIDEBAR } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case CHANGE_TAB:
    return { ...state, activeTab: action.payload }
  case CHANGE_SIDEBAR:
    return { ...state, sidebarOpen: action.payload }
  default:
    return state;
  }
}
