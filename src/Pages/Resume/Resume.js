import React from 'react'
import './Resume.css';
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import resumeDetails from '../../utils/resumeDetails';

const Resume = () => {
    return (
       <>
       {/* about me */} 
       <Grid container className = 'section pb_45'>
            <Grid item className = 'section_title mb_30'>
                <span></span>
               <h6 className = 'section_title_text'>About Me</h6>
            </Grid>
       </Grid>

       {/* Education & exp.*/}
       <Grid container className = 'section' xs={12}>
       <Typography variant='body2' className = 'aboutme_text'>{resumeDetails.about}</Typography>
       </Grid>

      {/* Services */}
       <Grid container className = 'section'></Grid>

       {/* skills*/}

       <Grid container className = 'section'></Grid>

       {/* contact */}
       
       <Grid container className = 'section'></Grid>
       
       </>
    );
};

export default Resume
