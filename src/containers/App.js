import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron } from 'reactstrap';
import logo from './../assets/img/logo.svg';
import './../assets/styles/Home.css';

import CardGridRow from './../components/CardGridRow';
import NavSimple from './../components/NavSimple';

import {fetchDRMCourses} from './../actions/app.actions';



class App extends Component {

  componentDidMount(){
    this.props.fetchDRMCourses();
  }
  
  
  render() {
     if (!this.props.auth.isAuthenticated){
      return(
        <Redirect to='/sign-in' />
      )
    }else{
    const navListItems = [["/", this.props.auth.user ? this.props.auth.user.email : 'user']];
    return (
      <div className="App">
        <NavSimple logo={logo} navList={navListItems}/>
        <Jumbotron>
          <div className="row">
              <div className="col-md">
                <img className="avatar-round" src={`https://api.adorable.io/avatars/285/${this.props.auth.user ? this.props.auth.user.email : 'tonystark@stark.io' }.png`} alt="user profile"/>
              </div>
              <div className="col-md">
                <h1 className="display-3 text-left align-middle
">{this.props.app.h1_1}, {this.props.auth.user ? this.props.auth.user.email : 'user'}</h1>
              </div>
          </div>
        </Jumbotron>
        <CardGridRow label={this.props.app.labels.live} courses={this.props.courses ? this.props.courses.live : []}/>
        <CardGridRow label={this.props.app.labels.video} courses={this.props.courses ? this.props.courses.video : []}/>
      
      </div>
    );
}
  }
}

function mapStateToProps(state) {
  return { 
    app: state.app,
    auth: state.auth,
    courses: state.courses
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDRMCourses
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
