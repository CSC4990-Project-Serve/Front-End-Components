import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../imgs/logo.png';
import '../css/NavigationBar.css'

const NavigationBar = () => {
    return (
        <>
            <Navbar className="navbar-color" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Project Serve Logo"
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Brand className="nav-title">Project Serve</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="container-fluid"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="ms-auto">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                            <Nav.Item className="nav-button">
                                <Button variant="outline-success">Log in</Button>
                            </Nav.Item>
                            <Nav.Item className="nav-button">
                                <Button bsStyle="primary">Sign up</Button>
                            </Nav.Item>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default NavigationBar;