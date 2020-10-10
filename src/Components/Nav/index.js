import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

export default function Navigation() {
  return (
    // <Router>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#recipes">Recipes</Nav.Link>
              <Nav.Link href="#faqs">FAQ's</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    // </Router>
  );
}
