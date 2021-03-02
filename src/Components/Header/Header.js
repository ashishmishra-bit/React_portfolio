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

import { link , NavLink , withRouter } from "react-router-dom";

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

const Header = () => {
    return (
        <Navbar expand="lg" sticky= 'top' className = "header">
        <Nav.Link as ={ NavLink } to ="/">
            <Navbar.Brand className= "header_home"><HomeRounded /></Navbar.Brand>
        </Nav.Link> 
        </Navbar>
    )
}

export default Header
