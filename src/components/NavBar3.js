import React, { createContext } from "react";
import Login from "./Login";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Landing";
const NavBar3 = () => {
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
              <NavDropdown title="Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/Profile">
                  Edit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">View</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Jobs" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/Jobs">
                  Apply
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Applied">
                  Applied
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Basic_profile">Basic profile</Nav.Link>
              <Nav.Link href="/Special_profile">Special profile</Nav.Link>
              <Nav.Link href="/Academic_profile">Academic profile</Nav.Link>
              <Nav.Link href="/Academic_profile">Academic profile</Nav.Link>
              <Nav.Link href="/Certification_profile">Certification profile</Nav.Link>
            </Nav>

            <Button variant="outline-dark" as={Link} to="/Landing">
              Log-Out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar3;
