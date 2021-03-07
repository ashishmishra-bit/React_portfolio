import React, { useState } from "react";
import {
    Tabs,
    Tab,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grow,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";
import "./Portfolio.css";
import resumeDetails from "../../utils/resumeDetails";
import { Container, Grid } from "@material-ui/core";

const Portfolio = () => {
    const [tabValue, settabValue] = useState("All");

    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container spacing = {2} className="section pb_45 pt_45">
            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* tabs */}
            <Grid item xs={12} className="pt_45">
                <Tabs
                    value={tabValue}
                    indicatorColor="white"
                    className="coustom_tabs"
                    onChange={(event, newValue) => settabValue(newValue)}
                >
                    <Tab
                        label="All"
                        value="All"
                        className={
                            tabValue == "All"
                                ? "customTabs_item active"
                                : "customTabs_item"
                        }
                    />

                    {[
                        ...new Set(
                            resumeDetails.projects.map((item) => item.tag)
                        ),
                    ].map((tag) => (
                        <Tab
                            label={tag}
                            value={tag}
                            className={
                                tabValue == tag
                                    ? "customTabs_item active"
                                    : "customTabs_item"
                            }
                        />
                    ))}
                </Tabs>
            </Grid>

            {/*Projects*/}

            <Grid container spacing={3}>
                {resumeDetails.projects.map((project) => (
                    <>
                        {tabValue == project.tag || tabValue == "All" ? (
                            <Grid item xs={12} sm={6} md={4}>
                                <Grow in timeout={2000}>
                                    <Card
                                        className="coustomCard"
                                        onClick={() =>
                                            setProjectDialog(project)
                                        }
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                className="coustomCard_image"
                                                image={project.images}
                                                title={project.title}
                                            />
                                            <CardContent>
                                                <Typography variant='body2' className="coustomCard_title">
                                                    {project.title}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    className="coustomCard_caption"
                                                >
                                                    {project.caption}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grow>
                            </Grid>
                        ) : null}
                    </>
                ))}
            </Grid>
            <Dialog 
                open={projectDialog}
                onClick={() => setProjectDialog(false)}
            className = 'projectDialog' fullWidth>
                <DialogTitle onClick={() => setProjectDialog(false)}>
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt="" className="projectDialog_image" />
                <DialogContent>
                    <Typography className="projectDialog_desc">
                        {projectDialog.desc}
                    </Typography>
                </DialogContent>
                <DialogActions className="projectDialog_actions">
                    {projectDialog?.links?.map((link) => (
                        <a
                            href={link.link}
                            target="_blank"
                            className="projectDialog_icon"
                        >
                            {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Portfolio;
