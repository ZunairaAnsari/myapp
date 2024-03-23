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
        fontFamily: 'Utopia',
        padding: '0.5em 0.5em 0.5em 0.5em'
    };

    return (
            <Navbar expand="lg" className="bg-body-tertiary navbar-transparent fixed-top">
                <Container>
                    <Navbar.Brand href="/"><img src={logo1} alt='logo' width={50} height={50} /></Navbar.Brand>
                    <Navbar.Brand href="/"><h5 style={{ fontFamily: 'Utopia', marginTop: '2px'}}>Photography</h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"/"} style={linkStyle}>Home</Link>
                            <Link to={"/about"} style={linkStyle}>About Us</Link>
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
    )
}

export default Header;
