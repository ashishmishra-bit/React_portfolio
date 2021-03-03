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
    GitHub,
    Telegram,
} from "@material-ui/icons";

import resumeDetails from "../../utils/resumeDetails"
import CustomButton  from "../Button/Button"

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
                <div className="header_right">
                {Object.keys(resumeDetails.social).map(key => (
                    <a href = {resumeDetails.social[key].link} target="_blank">{resumeDetails.social[key].icon}</a>
                ))}
             <a href="https://github.com/ashishmishra-bit" target="_blank"><CustomButton text = {'My Work'} icon = {<GitHub />} /></a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
