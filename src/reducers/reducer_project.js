import { FETCH_PROJECT, SET_TODO_STATUS } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECT:
    return action.payload
  case SET_TODO_STATUS:
    console.log("reducer: ", action.payload)
    return action.payload
  default:
    return state;
  }
}
