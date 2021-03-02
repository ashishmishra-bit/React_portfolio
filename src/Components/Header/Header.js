import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";

import { link, NavLink, withRouter } from "react-router-dom";

import {
    HomeRounded,
    SchoolRounded,
    WorkRounded,
    Facebook,
    Twitter,
    LinkedIn,
    Github,
    Telegram,
} from "@material-ui/icons";

const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
        <Navbar expand="lg" sticky='top' className="header">
            <Nav.Link as={NavLink} to="/">
                <Navbar.Brand className="header_home"><HomeRounded /></Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={NavLink} to="/" classname={pathName == '/' ? 'header_link_active' : "header_link"}>Resume</Nav.Link>
                    <Nav.Link as={NavLink} to="/portfolio" classname={pathName == '/portfolio' ? 'header_link_active' : "header_link"}>Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
