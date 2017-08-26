import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer_auth';
import projectsReducer from './reducer_projects'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  projects: projectsReducer
});
export default rootReducer;
