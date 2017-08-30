import { CHANGE_TAB } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case CHANGE_TAB:
    return { ...state, activeTab: action.payload }
  default:
    return state;
  }
}
