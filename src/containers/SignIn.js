import React, { Component } from 'react';
import logo from './../assets/img/logo.svg';
import './../assets/styles/App.css';

import SignInForm from './../components/SignInForm'

class SignIn extends Component {
  
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign In</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <p>Hello {process.env.REACT_APP_DOMAIN}</p>
       <SignInForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default SignIn;
