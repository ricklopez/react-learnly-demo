import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import home from './home.reducer';

const rootReducer = combineReducers({
  home
});

export default rootReducer;