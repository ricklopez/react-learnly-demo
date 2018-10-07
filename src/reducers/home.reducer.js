// import objectAssign from 'object-assign';
import initialState from './initialState';

const stateData = initialState({});

export default function(state = stateData.home, action) {
  console.log('Action received' , action);
  switch (action.type) {
    default:
      return state;
  }
}