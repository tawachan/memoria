import { FETCH_PROJECTS, FETCH_PROJECT } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_PROJECTS:
    return {
      list: _.mapKeys(action.payload, 'id'),
      selected_project: _.filter(action.payload, project =>  { return project.id === parseInt(localStorage.getItem('selected_project_id')); })[0]
    }
  case FETCH_PROJECT:
    return { ...state, selected_project: action.payload }
  default:
    return state;

  }

}
