import { FETCH_PROJECTS, FETCH_ERROR } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECTS:
    console.log("reducer: ", action.payload)
    return _.mapKeys(action.payload, 'id');
  case FETCH_ERROR:
    return {...state, error: action.payload };
  default:
    return state;

  }

}
