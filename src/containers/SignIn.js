import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './../assets/img/logo.svg';
import './../assets/styles/App.css';
import './../assets/styles/SignIn.css';

import NavSimple from './../components/NavSimple';
import SignInForm from './../components/SignInForm'

import {signIn} from './../actions/auth.actions';
import {reset} from 'redux-form';

class SignIn extends Component {
  
  submit = values => {
    console.log(values);
    this.props.signIn()
      .then(this.props.history.push('/app'));
    this.props.reset('signin');
    
  }
  
  render() {
    const navListItems = [["/", 'Home']];
    return (
       <div>
        <div className="App mb-5">
          <NavSimple logo={logo} navList={navListItems}/>
        </div>
        <h1 className="h3 mb-3 font-weight-normal text-center">Sign In</h1>
        <SignInForm onSubmit={this.submit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    auth: state.auth
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signIn,
    reset
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
