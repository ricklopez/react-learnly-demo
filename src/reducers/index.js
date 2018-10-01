import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home.reducer';
import publicData from './public.reducer';

const rootReducer = combineReducers({
  home,
  public: publicData,
  form: formReducer
});

export default rootReducer;