import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

export default  (props) => {
  const navItems = props.navList.map((item, index) => (
    <NavItem key={index}>
      <Link className="text-info" to={item[0]}>{item[1]} </Link>
    </NavItem>
  ));
  return (
    <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src={props.logo} className="App-logo" alt="logo" /> React Learnly</NavbarBrand>
          <Nav className="ml-auto" navbar>
             {navItems}
            </Nav>
        </Navbar>
  )
}