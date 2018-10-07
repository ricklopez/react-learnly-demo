import * as types from '../constants/action-types';
import axios from 'axios';


export function signIn(data){
  console.log("signIn", data);
  
  const reqPromise = axios.post(process.env.REACT_APP_USERS, {
     email: 'rick@test.com',
     password: 'Flintstone'
  });
  return {
    type: types.USER_SIGN_IN,
    payload: reqPromise
  }
  
}

export function signUp(data){
  //TODO: Handle the email sign up
  console.log("signUp", data);
  
  return {
    type: types.USER_SIGN_UP,
    payload: true
  }
  
}