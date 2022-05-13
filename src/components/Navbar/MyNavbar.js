import React from "react";
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';

const MyNavbar = () => {
    return (
        <>
            <Navbar bg='dark' variant="dark" sticky='top'>
                <Navbar.Brand as={Link} to='/'><Image className="mr-2" style={{ padding: '10px' }} src={Logo} width="150" height="auto" /></Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/about">FAQ</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    <Nav.Link as={Link} to="/sign-up">Signup</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default MyNavbar;

