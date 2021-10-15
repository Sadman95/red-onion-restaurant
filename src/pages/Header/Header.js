import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand className='d-flex justify-content-start align-items-center' href="#home"><img className='w-25' src="https://i.ibb.co/gypgG5T/logo2.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} className='text-dark' to="/cart"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>
              <Nav.Link as={Link} className='text-dark' to="/login">Log In</Nav.Link>
              <Nav.Link as={Link} className='text-dark' to="/signup">
                  <button className='btn btn-danger rounded-pill'>Sign Up</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
