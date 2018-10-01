import * as types from '../constants/action-types';
import axios from 'axios';


export function fetchCourses(data){
  const reqPromise = axios.get(process.env.REACT_APP_COURSES);
  return {
    type: types.FETCH_COURSES,
    payload: reqPromise
  }
  
}

export function emailFormSubmitted(data){
  //TODO: Handle the email sign up
  console.log("emailFormSubmitted", data);
  
  return {
    type: types.EMAIL_SIGN_UP,
    payload: true
  }
  
}