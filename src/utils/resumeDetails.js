import React from "react";

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import AndroidIcon from '@material-ui/icons/Android';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';

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

    about: 'Hello guys, this is Ashish Kumar Mishra. I am an earnest techie and enthusiast about interests in every new update that comes up. I love to be hardworking and dedicated to whatever I take up as a task. Web development attracts me the most. I have also learned Android Development. Apart from that, I do know about SEO. I have also earned certification in UI/UX. I have also completed 2 projects namely. One of them being a music and billing app for android and the other are 4 to 5 website designs for UI/UX.\n\nThe journey of my B. Tech years have started with these new experiences and I felt a keen interest growing in me. Getting to learn these things have always been worth it. But this is just the beginning. I am always brushing up my skills more to attain perfection. Looking forward to gathering more knowledge and being more accurate in my field.',

    experiences : [
        {
            title : 'Web Developer (freelancecomunitee.com)',
            date: '19/01/21 - Present',
            desc: 'I am responsible for developing the website and integratingit with automation tools like Integromat , Automate.io ,Zapier , Mailchimp,etc',
        },
        {
            title : 'Web & Android Developer & UI/UX Designer(GFG-KIIT)',
            date: 'December-2020 - Present',
            desc: 'I am responsible for making projects  on the above mentioned domains and helping others in the club with the same. I am also responsible for leading some of the major events which the club puts forward for all the students and developers around the University.',
        },
        {
            title : 'Web Developer (A2D Web)',
            date: 'November-2020 - January-2021',
            desc: 'I was responsibe for developing the companies website in the give time period',
        },
        {
            title : 'Web Developer (Kenisha Styles)',
            date: 'July-2020 - September-2020',
            desc: 'I am responsible for developing the website and integratingit with automation tools like Integromat , Automate.io ,Zapier , Mailchimp,etc',
        },
    ],

    educations: [
        {
            title : 'Secondary (X)',
            date: '05/2016 - 05/2017',
            desc: 'I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 9.8 CGPA in my Xth grade and my subjects were (English,Maths,Science,Social Science & Hindi)',
        },
        {
            title : 'Senior Secondary (XII)',
            date: '05/2018 - 05/2019',
            desc: 'I studied in Army Public School Narangi; Its an CBSE board school with all facilities. I secured 83.3% in my XIIth grade and my subjects were (Physics,Chemistry,Maths,English,Physical Education)',
        },
        {
            title : 'Bachelor(B.tech)',
            date: 'July-2019 - Present',
            desc: 'I am a 2nd year IT student. I secured 8.5 CGPA in my 3rd semester. I have started doing development stuffs from mid of my 1st year and development facinated me a lot.',
        },
       
    ],

    services: [
        {
            title: 'Web Development',
            desc: 'I have been developing scalable Website and Web Applications from past 1 year. I have Developed almost all type of websites.',
            icon: <LanguageIcon />
        },
        {
            title: 'Android & Flutter Development',
            desc: 'I have been developing & learning Android Development from past 3-4 months. I have developed 3 Android Application',
            icon: <AndroidIcon />
        },
        {
            title: 'UI / UX Designer',
            desc: 'I gained the interest in UI/UX designing as I started with Front-End development and it always facinated me.',
            icon: <ShutterSpeedIcon />
        },
    ],

    skills:[
        {
            title : "Front-End",
            desc  : [
                "ReactJs",
                "JavaScript",
                "Bootstrap",
                "Materia UI",
                "SAAS & Tailwind css",
                "Wordpress"
            ],
        },
        {
            title : "Back-End",
            desc : [
                "Node.js",
                "Java",
                "Python",
                "Django",
                "Express.js",
                "PHP",
                "Dart"
            ],
        },
        {
            title : "Databases",
            desc : [
                "Firebase",
                "MySQL",
                "MongoDB",
                "NoSQL",
                "SQL Lite"             
            ],
        },
        {
            title : "Graphics",
            desc : [
                "Figma",
                "Adobe XD",
                "Adobe Photoshop",
                "Adobe illustrator"               
            ],
        },
    ],
};