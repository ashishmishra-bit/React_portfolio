import React from 'react'
import './Resume.css';
import TimeLine, { TimeLineSeparator } from "../../Components/Timeline/TimeLine";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import resumeDetails from '../../utils/resumeDetails';

import WorkIcon from '@material-ui/icons/Work';

const Resume = () => {
    return (
        <>
            {/* about me */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeDetails.about}</Typography>
                </Grid>
            </Grid>

            {/* Education & exp.*/}
            <Grid container className='section' xs={12}>
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>


            <Grid item xs={12}>
                <Grid container>
                {/*experience */}
                    <Grid item sm = {12}  md = {6} className= "work_exp">
                    <TimeLine title="Work Experience" icon = {<WorkIcon />}></TimeLine>
                    </Grid>


                 {/*Education */}
                    <Grid item sm = {12}  md = {6}></Grid>
                </Grid>
            </Grid>
            </Grid>

            {/* Services */}
            <Grid container className='section'></Grid>

            {/* skills*/}

            <Grid container className='section'></Grid>

            {/* contact */}

            <Grid container className='section'></Grid>

        </>
    );
};

export default Resume
