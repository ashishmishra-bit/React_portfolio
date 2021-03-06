import React, { useState } from "react";
import { Tabs, Tab, Typography, Card, CardActionArea, CardMedia, CardContent, Grow } from '@material-ui/core';
import './Portfolio.css';
import resumeDetails from '../../utils/resumeDetails';
import { Container, Grid } from "@material-ui/core";


const Portfolio = () => {

    const [tabValue, settabValue] = useState("All");

    return (
      
        <Grid container className="section pb_45 pt_45">
            <Grid item className='section_title mb_20'>
                <span></span>
                <h6 className='section_title_text'>Portfolio</h6>
            </Grid>     
    
           

            {/* tabs */}
            <Grid item xs={12} className = "pt_45">
                <Tabs value={tabValue} indicatorColor='white' className="coustom_tabs" onChange={(event, newValue) => settabValue(newValue)}>
                <Tab label='All' value = 'All' className={tabValue =='All' ? 'customTabs_item active' : 'customTabs_item'} />


                {[...new Set(resumeDetails.projects.map(item =>item.tag))].map(tag =>(
                    <Tab label = {tag} value = {tag} className={tabValue =='All' ? 'customTabs_item active' : 'customTabs_item'} />
                ))}

                </Tabs>
            </Grid>
      
      
      
      
            {/*Projects*/}

            <Grid container spacing = {2}>
                {resumeDetails.projects.map(project => (
                    <>
                    {tabValue == project.tag || tabValue == 'All' ? (
                        <Grid item>
                        <Grow in timeout={2000}>
                            <Card className = "CoustomCard" onClick={() => console.log('Hello')}>
                                <CardActionArea>
                                    <CardMedia className="coustomCard_image" image = {project.images} title={project.title} />
                                    <CardContent>
                                        <Typography>{project.title}</Typography>
                                        <Typography>{project.desc}</Typography>
                                    </CardContent>
                                    
                                </CardActionArea>
                            </Card>
                            </Grow>
                        </Grid>
                    ) : null}
                 
                    </>
                ))}
            </Grid>
            
            </Grid>
      
    );
};

export default Portfolio;
