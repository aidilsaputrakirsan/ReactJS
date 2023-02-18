import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Navigation() {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!isExpanded);

  return (
    <Navbar bg="primary" expand="lg" className="navbar-fixed-top">
      <Navbar.Brand href="#home">Profile Aidil</Navbar.Brand>
      <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav">
        <FaBars />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" expanded={isExpanded}>
        <Nav className="ml-auto">
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#work-experience">Work Experience</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
