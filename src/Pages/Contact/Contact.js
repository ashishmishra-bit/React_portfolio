import React, { useState, useEffect } from "react";
import "./Contact.css";

import { db } from "../../firebase";
import ContactsIcon from "@material-ui/icons/Contacts";
import TimeLine from "../../Components/Timeline/TimeLine";
import { Typography } from "@material-ui/core";
import resumeDetails from "../../utils/resumeDetails";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Container, Grid } from "@material-ui/core";


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
        <>
            {/* Contact Form*/}
            <Grid container className="section" xs={12}>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        <Grid item sm={12} md={6} className="work_exp">
                            <form onSubmit={handleSubmit}>
                                <Grid container className="contact-form ">
                                    <Grid item className="heading-contact">
                                        <span></span>
                                        <h6>Contact Me 🖐</h6>
                                    </Grid>
                                    <Grid item className="input-name" xs={12}>
                                        <br />
                                        <input
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    <Grid item className="input-email" xs={12}>
                                        <br />
                                        <input
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <input
                                            className="input-message"
                                            placeholder="Message"
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        />
                                    </Grid>
                                    <button
                                        xs={12}
                                        type="submit"
                                        style={{
                                            background: loader ? "#ccc" : "",
                                        }}
                                    >
                                        Submit
                                    </button>
                                </Grid>
                            </form>
                        </Grid>

                        {/*Contact Informations */}
                        <Grid item sm={12} md={6} className="work_exp">                            
                            <TimeLine title="Contact Informations ☎" icon={<ContactsIcon />} className= "timeline_heading">
                                <TimelineItem>
                                    <TimelineSeparator className="separator_padding">
                                        <TimelineDot
                                            variant="outlined"
                                            className="timeline_dot"
                                        ></TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="timeline_content">
                                        <Typography
                                            variant="caption"
                                            className="timeline_title"
                                        >
                                            Address: {resumeDetails.address2}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator className="separator_padding">
                                        <TimelineDot
                                            variant="outlined"
                                            className="timeline_dot"
                                        ></TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="timeline_content">
                                        <Typography
                                            variant="caption"
                                            className="timeline_title"
                                        >
                                            Phone: {resumeDetails.phone}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                
                                <TimelineItem>
                                    <TimelineSeparator className="separator_padding">
                                        <TimelineDot
                                            variant="outlined"
                                            className="timeline_dot"
                                        ></TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent className="timeline_content">
                                        <Typography
                                            variant="caption"
                                            className="timeline_title"
                                        >
                                            Email: {resumeDetails.email}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </TimeLine>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <div className="map-sect">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28653.80259145901!2d91.81701377541614!3d26.140497475468685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af629cf3a5aa9%3A0xdc59dd3b0fb8073e!2sRailline%20Kali%20Mandir!5e0!3m2!1sen!2sin!4v1615002140223!5m2!1sen!2sin"
                    className="map-frame"
                ></iframe>
            </div>
        </>
    );
};

export default Contact;
