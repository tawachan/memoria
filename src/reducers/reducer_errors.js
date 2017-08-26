import { FETCH_ERROR, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_ERROR:
    return {fetch: action.payload }
  case AUTH_ERROR:
    return {user: action.payload};
  default:
    return state;
  }
}
