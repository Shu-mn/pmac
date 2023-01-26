//import React from 'react'
import{Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

function Header(){
     return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">PMAC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Action 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

export default Header