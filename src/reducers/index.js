import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home.reducer';
import publicData from './public.reducer';
import courses from './courses.reducer';
import auth from './auth.reducer';
import app from './app.reducer';

const rootReducer = combineReducers({
  home,
  auth,
  app,
  courses,
  public: publicData,
  form: formReducer
});

export default rootReducer;