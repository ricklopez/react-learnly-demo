import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';
import logo from './../assets/img/logo.svg';
import './../assets/styles/Home.css';

import EmailForm from './../components/EmailForm';
import CardGrid from './../components/CardGrid';

import {fetchCourses} from './../actions/home.actions';



class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
  
  
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
  
  componentDidMount(){
    console.log(this.props.home);
    this.props.fetchCourses();
  }
  
  submit(values) {
    // print the form values to the console
    console.log(values)
  }
  
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo" /> React Learnly</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

        </Navbar>
        <Jumbotron>
          <h1 className="display-3">{this.props.test}</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <div className="lead-form row">
            <EmailForm onSubmit={this.submit}/>
          </div>
        </Jumbotron>
        <CardGrid courses={{live:[], video:[]}}/>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { 
    home: state.home,
    public: state.public
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCourses
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
