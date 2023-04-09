import React, { createContext,useState } from "react";
import Login from "./Login";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Landing";
const ExpertsNavBar = ({setIndex}) => {
  let logOut = () => {
    
    let access_token = localStorage.getItem("access_token")
    console.log(access_token);
    window.location.href = '/'
    localStorage.removeItem("access_token")
  }
  return (
    <div>


      <Navbar bg="light" expand="lg">
     
       
  
        <Container fluid>
       
          <Navbar.Toggle aria-controls="navbarScroll" />
     
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
             
             <Nav.Link onClick={()=>setIndex(0)}>Basic Profile</Nav.Link>
              <Nav.Link onClick={()=>setIndex(1)}>Academic Certificates</Nav.Link>
              <Nav.Link onClick={()=>setIndex(2)}>Professional profile </Nav.Link>
              <Nav.Link onClick={()=>setIndex(3)}>Publications </Nav.Link>
              <Nav.Link onClick={()=>setIndex(4)}>Professional_Certificates</Nav.Link>
              <Nav.Link onClick={()=>setIndex(5)}>Employee Awards</Nav.Link>
              <Nav.Link onClick={()=>setIndex(6)}>Expected Opportunities</Nav.Link>
             
            </Nav>

            <Button variant="outline-dark" onClick={logOut}>
              Log-Out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ExpertsNavBar;
