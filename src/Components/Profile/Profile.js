import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";

import TimeLine, { TimeLineSeparator } from "../Timeline/TimeLine";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

import profile from "../../assets/images/profile2.png";

import resumeDetails from "../../utils/resumeDetails";
import PersonIcon from "@material-ui/icons/Person";
import GetAppIcon from '@material-ui/icons/GetApp';

import CustomButton from '../Button/Button'

const TimeLineItem = ({ title, text, link }) => (
    <TimelineItem>
        <TimeLineSeparator/>
        <TimelineContent>
            {link ? (
                <Typography className= "timelineItem_text">
                    <span> {title}: </span>{" "}
                    <a href={link} target="_blank">
                        {text}
                    </a>
                </Typography>
            ) : (
                <Typography className= "timelineItem_text">                    
                    <span> {title}: </span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeDetails.name}</Typography>
                <Typography className="title">{resumeDetails.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={profile} alt="" />
            </figure>
            <div className="profile_information">
                <TimeLine icon={<PersonIcon />}>
                <TimeLineItem  title='Name' text={resumeDetails.name} />
                <TimeLineItem  title='Email' text={resumeDetails.email} />
                <TimeLineItem  title='Phone' text={resumeDetails.phone} />
                <TimeLineItem  title='Job' text={resumeDetails.jobs} />
                <TimeLineItem  title='Address' text={resumeDetails.address} />


            { /*   {Object.keys(resumeDetails.social).map(key =>(
                    <TimeLineItem  title={key} text={resumeDetails.social[key].text} link ={resumeDetails.social[key].link}  />
            ))} */}

                </TimeLine>
                <div className = "button_container">
                <a href="https://drive.google.com/file/d/1-8FxG2Fsw6qgwTkq1lc-ZGC1tWXOjNWN/view?usp=sharing" target="_blank"><CustomButton text = {'Download Resume'} icon = {<GetAppIcon />}  link = {""}/></a>
                </div>                
                
            </div>
        </div>
    );
};

export default Profile;
