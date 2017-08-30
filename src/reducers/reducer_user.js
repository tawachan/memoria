import { AUTH_USER, UNAUTH_USER, FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case AUTH_USER:
    const newState = action.payload
    return {...newState, authenticated: true, error: ''};
  case UNAUTH_USER:
    return {authenticated: false, error: ''};
  case FETCH_USER:
    return { ...state, data: action.payload }
  default:
    return state;

  }

}
