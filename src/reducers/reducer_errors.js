import { FETCH_ERROR, AUTH_ERROR, UNAUTH_USER } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_ERROR:
    return {fetch: action.payload }
  case AUTH_ERROR:
    return {user: action.payload};
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
