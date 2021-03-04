import React from 'react';
import './Footer.css';
import { Typography } from "@material-ui/core";
import resumeDetails from '../../utils/resumeDetails';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className= "footer_name">{resumeDetails.name}</Typography>
            </div>
            <div className="footer_right">
               <Typography className= "footer_copyright">
                    © 2021 Developed By | <a href="/" target="_blank">Ashish Kumar Mishra</a> | All Rights Reserved.
               </Typography>
            </div>
        </div>
    )
}

export default Footer
