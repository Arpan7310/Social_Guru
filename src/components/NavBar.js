import React, { createContext } from 'react'
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Landing';
const NavBar = () => {
  
  return (
    
    <div>
      
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
            
          </Nav>
          <Nav className="size-fix">
          <NavDropdown title="Login" id="collasible-nav-dropdown">
              
              <NavDropdown.Item as={Link} to="/Sign_in">
                Experts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Sign_in2">Agencies</NavDropdown.Item>
              
            </NavDropdown>
          
            <NavDropdown title="Register" id="collasible-nav-dropdown">
              
              <NavDropdown.Item as={Link} to="/Employee">
                Experts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Organization">Agencies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Landing">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    

    
  )
}

export default NavBar
