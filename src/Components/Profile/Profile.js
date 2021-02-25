import React from 'react'
import { Typography } from '@material-ui/core';
import './Profile.css'

import profile from '../../assets/images/profile1.jpg';

const Profile = () => {
    return (
        <div className="profile container_shadow margin">
            <div className="profile_name">
                <Typography className='name'>Ashish</Typography>
                <Typography className='title'>Mishra</Typography>
            </div>

            <figure className='profile_image'>
                <img src = {profile} alt="" />
            </figure>
            <div className="profile_information">
                Time line number
                <br/>
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile

