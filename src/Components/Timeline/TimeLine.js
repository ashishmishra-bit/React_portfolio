import React from "react";
import { Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from '@material-ui/icons/Work';

import "./Timeline.css";

const TimeLine = ({ title , icon, children }) => {
    return (
        <Timeline className={"timeline"}>
            <TimelineItem className={"timeline_firstItem"}>
                <TimelineSeparator>
                    <TimelineDot className={"timeline_dots_header"}>{<WorkIcon />}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className={"timeline_header"}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {children}

            <TimelineItem>
                <TimeLineSeparator />
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export const TimeLineSeparator = () => (
    <TimelineSeparator className={"separator_padding"}>
        <TimelineDot className={"timeline_dot"} />
        <TimelineConnector />
    </TimelineSeparator>
);

export default TimeLine;
