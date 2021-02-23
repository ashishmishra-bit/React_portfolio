import React from 'react';
import { Container , Grid } from '@material-ui/core';

import Profile from './Components/Profile/Profile'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'

import './App.css';

function App() {
  return (
    
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12}  md={4} lg={3}>
          <Profile />
        </Grid>         
        <Grid item xs>
        <Header />
        <Portfolio />
        <Resume />
        <Footer />
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
