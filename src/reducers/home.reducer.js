import objectAssign from 'object-assign';
import { EMAIL_SIGN_UP } from '../constants/action-types';
import initialState from './initialState';

const stateData = initialState({});

export default function(state = stateData.home, action) {
  switch (action.type) {
      
    case EMAIL_SIGN_UP:
      return objectAssign({}, state,{emailSubmit: action.payload});
    default:
      return state;
  
  }
}