import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projectsReducer from './reducer_projects';
import projectReducer from './reducer_project';
import userReducer from './reducer_user';
import statusReducer from './reducer_status';
import errorsReducer from './reducer_errors';


const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  projects: projectsReducer,
  project: projectReducer,
  errors: errorsReducer,
  status: statusReducer
});
export default rootReducer;
