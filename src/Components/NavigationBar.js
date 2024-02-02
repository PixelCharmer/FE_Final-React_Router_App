
// importing the necessary dependencies 

import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

// used React Bootstrap to build out the navbar located at the top of each page
// navbar contains links to each of the pages as well as back to the home page

export default function NavigationBar () {
  return (
    <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Recruiter Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/workflow">
              Recruiting Workflow
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pipeline">
              Candidate Pipeline
            </Nav.Link>
            <Nav.Link as={NavLink} to="/jobs">
              Job List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/candidates">
              Candidate Tracker
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


