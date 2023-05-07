import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css'

function Navigation() {

    const user = useSelector (state => state.user);
  return (
    <Navbar expand="lg">
      <Container className='nav'>
        <LinkContainer to="/">
          <Navbar.Brand style={{color:'white'}}>Free Spirit</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">            
          <Nav className="ms-auto" style={{color:'white'}}>
            {/* if no user logged in */}
            {user && (
              <LinkContainer to='/login'>
                            <Nav.Link href="/login" style={{color:'white'}}>Login</Nav.Link>
              </LinkContainer>
            )}
            <Nav.Link href="/Signup" style={{color:'white'}}>Signup</Nav.Link>
            {/* make navdrop down title white */}
              {!user && (
              <NavDropdown title='name' color='white' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
            </NavDropdown>

              )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;