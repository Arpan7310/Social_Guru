import React, { createContext } from 'react'
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Landing';
const NavBar2 = () => {
  
  return (
    
    <div>
      
      <Navbar bg="light" expand="lg">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Profile_com">Edit</NavDropdown.Item>
              <NavDropdown.Item>
                View
              </NavDropdown.Item>
              
              
            </NavDropdown>

            <NavDropdown title="Posting" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Posting">Post Opportunities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Applications">
                View Applications
              </NavDropdown.Item>
              
              
            </NavDropdown>

            <Nav.Link>History</Nav.Link>


            
          </Nav>
          
            <Button variant="outline-dark" as={Link} to="/Landing">Log Out</Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    

    
  )
}

export default NavBar2
