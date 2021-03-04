import React from 'react'
import './Resume.css';
import TimeLine, { TimeLineSeparator } from "../../Components/Timeline/TimeLine";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import resumeDetails from '../../utils/resumeDetails';
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

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
                <Grid container className='resume_timeline'>
                {/*experience */}
                    <Grid item sm = {12}  md = {6} className= "work_exp">
                    <TimeLine title="Work Experience" icon = {<WorkIcon />}>
                    {resumeDetails.experiences.map(exp => (
                        <TimelineItem>
                        <TimelineSeparator className="separator_padding">
                        
                        <TimelineDot variant="outlined" className="timeline_dot">                      
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">{exp.title}</Typography>
                        <Typography variant= "caption" className="timeline_date">{exp.date}</Typography>
                        <Typography variant= "body2" className="timeline_desc">{exp.desc}</Typography>
                        </TimelineContent>
                        </TimelineItem>
                    ))}
                    </TimeLine>
                    </Grid>


                 {/*Education */}
                 <Grid item sm = {12}  md = {6} className= "work_exp">
                 <TimeLine title="Education" icon = {<SchoolIcon />}>
                 {resumeDetails.experiences.map(exp => (
                     <TimelineItem>
                     <TimelineSeparator className="separator_padding">
                     
                     <TimelineDot variant="outlined" className="timeline_dot">                      
                     </TimelineDot>
                     <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent className="timeline_content">
                     <Typography className="timeline_title">{exp.title}</Typography>
                     <Typography variant= "caption" className="timeline_date">{exp.date}</Typography>
                     <Typography variant= "body2" className="timeline_desc">{exp.desc}</Typography>
                     </TimelineContent>
                     </TimelineItem>
                 ))}
                 </TimeLine>
                 </Grid>
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
