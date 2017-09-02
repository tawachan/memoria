import { FETCH_PROJECTS, UNAUTH_USER } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECTS:
    return  _.mapKeys(action.payload, 'id')
  case UNAUTH_USER:
    return {}
  default:
    return state;
  }
}
