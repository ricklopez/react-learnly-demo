import React, { Component } from 'react';
import logo from './../assets/img/logo.svg';
import './../assets/styles/App.css';
import './../assets/styles/SignIn.css';

import NavSimple from './../components/NavSimple';
import SignInForm from './../components/SignInForm'

class SignIn extends Component {
  
  submit = values => {
    console.log(values)
  }
  
  render() {
    const navListItems = [["/", 'Home']];
    return (
       <div>
        <div className="App mb-5">
          <NavSimple logo={logo} navList={navListItems}/>
        </div>
        <h1 className="h3 mb-3 font-weight-normal text-center">Sign In</h1>
        <SignInForm/>
      </div>
    );
  }
}

export default SignIn;
