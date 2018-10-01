import objectAssign from 'object-assign';
import { FETCH_COURSES } from '../constants/action-types';
import initialState from './initialState';

const stateData = initialState({});

export default function(state = stateData.public, action) {
  switch (action.type) {
    case FETCH_COURSES:
      const coursesGrouped = action.payload.data.reduce((accumulator, value, index) => {
        if(!accumulator.hasOwnProperty(value.type)){
          accumulator[value.type] = [];
        }
        accumulator[value.type].push(value);
        return accumulator;
      }, {});
      return objectAssign({}, state, {courses: coursesGrouped});
    default:
      return state;
  }
}