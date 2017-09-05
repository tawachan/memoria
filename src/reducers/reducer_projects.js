import { FETCH_PROJECTS, UNAUTH_USER, CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECTS:
    return  _.mapKeys(action.payload, 'id')
  case CREATE_PROJECT:
    const newStateCreate = state
    newStateCreate[action.payload.id] = action.payload
    console.log("updated projects", newStateCreate)
    return newStateCreate
  case UPDATE_PROJECT:
    const newStateUpdate = state
    newStateUpdate[action.payload.id] = action.payload
    console.log("updated projects", newStateUpdate)
    return newStateUpdate
  case DELETE_PROJECT:
    const newState = state;
    delete newState[action.payload.id];
    return newState;
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
