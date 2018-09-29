import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

import SignInForm from './SignInForm'

class App extends Component {
  
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

export default App;
