import React from 'react'
import { Typography } from '@material-ui/core';
import './Profile.css'

import CoustomTimeline from '../Timeline/TimeLine';

import profile from '../../assets/images/profile2.png';

import resumeDetails from '../../utils/resumeDetails'

const Profile = () => {
    return (
        <div className="profile container_shadow margin">
            <div className="profile_name">
                <Typography className='name'>{resumeDetails.name}</Typography>
                <Typography className='title'>{resumeDetails.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src = {profile} alt="" />
            </figure>
            <div className="profile_information">
                <CoustomTimeline />
                <br/>
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile

