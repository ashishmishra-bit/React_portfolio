import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default {
    name : 'Ashih Kumar Mishra',
    title : 'Full Stack Web Developer & Android Developer',

    jobs : 'Student',
    email : 'ashish.mishra52002@gmail.com',
    phone : '+91-8822161061',
    address : 'Guwahati , Assam',

    social: {            
        LinkedIn:{
            link : 'https://www.linkedin.com/in/ashish-kumar-mishra-91366b193',
            text : '@ashish-kumar-mishra',
            icon : <LinkedInIcon />,
        },
        // Github:{
        //     link : 'https://github.com/ashishmishra-bit',
        //     text : 'ashishmishra-bit',
        //     icon : <GitHubIcon />,
        // },
        Instagram:{
            link : 'https://www.instagram.com/a_s_h_i_s_h_mishra/',
            text : 'a_s_h_i_s_h_mishra',
            icon : <InstagramIcon />,
        },  
        Twitter:{
            link : 'https://www.instagram.com/a_s_h_i_s_h_mishra/',
            text : 'a_s_h_i_s_h_mishra',
            icon : <TwitterIcon />,
        }, 
    },
};