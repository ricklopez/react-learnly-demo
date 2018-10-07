import objectAssign from 'object-assign';
import { USER_SIGN_IN } from '../constants/action-types';
import initialState from './initialState';

const stateData = initialState({});

export default function(state = stateData.auth, action) {
  console.log("Auth Reducer", action);
  switch (action.type) {
    case USER_SIGN_IN:
      const newstate = action.payload.data;
      newstate.isAuthenticated = newstate.success;
      
      return objectAssign({}, state,  newstate);
    default:
      return state;
  }
}