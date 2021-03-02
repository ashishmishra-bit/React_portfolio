import React from "react";
import { Button } from "@material-ui/core";

import './Button.css'

const CustomButton = ({ text, icon ,link}) => {
    return (
        <Button
            className="site_btn"
            endIcon={icon ? <div className="icon_btn_container">{icon}</div> : null}>
            <span className="btn_text">{text}</span></Button>
    );
};

export default CustomButton;
