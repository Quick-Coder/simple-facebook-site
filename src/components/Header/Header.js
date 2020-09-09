import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
           
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Facebook</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/friends">Friends</Nav.Link>
                    <Nav.Link href="/Select">Select Friends</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Salma</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Jamil vi</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Nazma</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Asma</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Shohag</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Tasmia
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Header;