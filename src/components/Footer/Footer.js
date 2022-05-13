import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa';
import classes from './Footer.module.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.social}>
                <Nav className='justify-content-center'>
                    <Nav.Link as={Link} to=""><FaFacebookF/></Nav.Link>
                    <Nav.Link as={Link} to=""><FaTwitter/></Nav.Link>
                    <Nav.Link as={Link} to=""><FaYoutube/></Nav.Link>
                    <Nav.Link as={Link} to=""><FaLinkedinIn/></Nav.Link>
                </Nav>
            </div>
            <p>Copyright @2022 - Active Life</p>
        </div>
    );
};

export default Footer;