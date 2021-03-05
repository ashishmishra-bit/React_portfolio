// import React from 'react'
import './Contact.css';
import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { db } from "../../firebase";
import resumeDetails from '../../utils/resumeDetails';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
        <Grid container className='section pb_45'>
        <Grid item className='section_title mb_20'>
            <span></span>
            <h6 className='section_title_text'>Contact Me</h6>
        </Grid>       
    </Grid>

            <label>Name</label>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
                type="submit"
                style={{ background: loader ? "#ccc" : "" }}
            >
                Submit
      </button>
        </form>
        
    );
};

export default Contact;