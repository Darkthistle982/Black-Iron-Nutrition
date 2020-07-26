import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

export default function Navigation() {
  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#recipes">Recipes</Nav.Link>
          <Nav.Link href="#faqs">FAQ's</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
