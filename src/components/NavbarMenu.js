import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class NavbarMenu extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ padding: "5px 60px" }}
      >
        <Navbar.Brand href="#home" style={{ fontSize: 30 }}>
          So,
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#gitHub">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMenu;
