import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import yodlr_logo from "../assets/images/yodlr-logo.png";

import "../assets/css/Navbar.css";

const Header = () => {
  return (
    <header>
      <Container fluid className='fixed'>
        <Row>
          <Col lg={12} className='m-0 p-0'>
            <Navbar
              variant='light'
              expand='lg'
              collapseOnSelect
              className=' py-1 fs-6 bg-custom'
            >
              <LinkContainer to='/'>
                <Navbar.Brand className='d-flex mx-2 p-0 brand-text fs-3 '>
                  <img
                    src={yodlr_logo}
                    width='150'
                    height='100'
                    className='d-inline-block align-center'
                    alt='yodlr-logo'
                  />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />

              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='m-auto'>
                  <LinkContainer className='m-0 ps-3 pe-5' exact to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer className='m-0 ps-3 pe-5' to='/signup'>
                    <Nav.Link>Sign Up</Nav.Link>
                  </LinkContainer>
                  <LinkContainer className='m-0 ps-3 pe-5' to='/admin'>
                    <Nav.Link>Admin</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
