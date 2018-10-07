import * as types from '../constants/action-types';
import axios from 'axios';


export function fetchDRMCourses(data){
  console.log(process.env.REACT_APP_DRM_COURSES);
  const reqPromise = axios.get(process.env.REACT_APP_DRM_COURSES);
  return {
    type: types.FETCH_DRM_COURSES,
    payload: reqPromise
  }
  
}