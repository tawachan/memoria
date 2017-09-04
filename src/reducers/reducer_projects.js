import { FETCH_PROJECTS, UNAUTH_USER, CREATE_PROJECT } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECTS:
    return  _.mapKeys(action.payload, 'id')
  case CREATE_PROJECT:
    const newState = state
    newState[action.payload.id] = action.payload
    return newState
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
