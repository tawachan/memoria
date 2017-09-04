import { DETECT_ERROR, AUTH_ERROR, UNAUTH_USER } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case DETECT_ERROR:
    return {api: action.payload }
  case AUTH_ERROR:
    return {user: action.payload};
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
