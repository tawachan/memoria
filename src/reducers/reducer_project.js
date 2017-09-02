import { FETCH_PROJECT, UPDATE_TODO, FETCH_TODO } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECT:
    return { ...action.payload, activeTodoId: '' }
  case UPDATE_TODO:
    return { ...action.payload, activeTodoId: state.activeTodoId }
  case FETCH_TODO:
    return { ...state, activeTodoId: action.payload }
  default:
    return state;
  }
}
