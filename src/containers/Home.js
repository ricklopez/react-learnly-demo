import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron } from 'reactstrap';
import logo from './../assets/img/logo.svg';
import './../assets/styles/Home.css';

import EmailForm from './../components/EmailForm';
import CardGridRow from './../components/CardGridRow';
import NavSimple from './../components/NavSimple';

import {fetchCourses, emailFormSubmitted} from './../actions/home.actions';



class Home extends Component {

  componentDidMount(){
    this.props.fetchCourses();
  }
  
  
  render() {
    const navListItems = [["/sign-in", 'Sign In']];
    return (
      <div className="App">
        <NavSimple logo={logo} navList={navListItems}/>
        <Jumbotron>
          <h1 className="display-3">{this.props.home.h1_1}</h1>
          <p className="lead">{this.props.home.p_1}</p>
          <hr className="my-2" />
          <h2 className="mt-5">{this.props.home.form_h2_1}</h2>
          <div className="lead-form row">
            <EmailForm onSubmit={(e) => this.props.emailFormSubmitted(e)} emailSubmit={this.props.home.emailSubmit}/>
            <p className={this.props.home.emailSubmit ? 'lead text-success' : 'lead text-successd d-none'}> Cool, you're signed up.</p>
          </div>
        </Jumbotron>
        <CardGridRow label={this.props.public.labels.live} courses={this.props.public ? this.props.public.courses.live : []}/>
        <CardGridRow label={this.props.public.labels.video} courses={this.props.public ? this.props.public.courses.video : []}/>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    home: state.home,
    public: state.public
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCourses,
    emailFormSubmitted
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
