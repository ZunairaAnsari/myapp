import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import logo1 from './asset/camera-icon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        padding: '0.5em 0.5em 0.5em 0.5em'
    };

    return (
        <div className='header'>
            <Navbar expand="lg" className="bg-body-tertiary navbar-transparent fixed-top">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo1} alt='logo' width={50} height={50} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"/"} style={linkStyle}>Home</Link>
                            <Link to={"/about"} style={linkStyle}>About Us</Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" style={linkStyle}>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" style={linkStyle}>Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" style={linkStyle}>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" style={linkStyle}>Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                                </Col>
                                <Col xs="auto">
                                    <Link to={"/signup-page"} ><Button className="custom-button">Sign Up</Button></Link>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
