import * as types from '../constants/action-types';
import axios from 'axios';


export function fetchCourses(data){
  const reqPromise = axios.get("http://node-labs-ricklopez.codeanyapp.com:3001/courses");
  console.log("fetchCourses");
  return {
    type: types.FETCH_COURSES,
    payload: reqPromise
  }
  
}