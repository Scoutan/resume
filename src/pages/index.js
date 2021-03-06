import React from 'react'
import Head from 'next/head'
import { headers } from '../components/Constants'
import SideMenu from '../components/SideMenu'
import BackToTop from '../components/BackToTop'
import Summary from '../components/Summary'
import WorkEd from '../components/WorkEd'
import ContactInfo from '../components/ContactInfo'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
// import styles from '../../styles/Home.module.css'
import {
  makeStyles,
  CssBaseline,
  Container,
  Grid,
  Typography,
  createMuiTheme, ThemeProvider
} from '@material-ui/core'

const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '18rem',
  '@media (max-width:1015px)': {
    fontSize: '14rem'
  },
  '@media (max-width:815px)': {
    fontSize: '12rem'
  },
  '@media (max-width:700px)': {
    fontSize: '10rem'
  },
  '@media (max-width:450px)': {
    fontSize: '7em'
  }
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#1F2833"
  },
  header: {
    fontFamily: 'Helvetica',
    color: '#FFF',
    letterSpacing: '0.3em',
    textAlign: 'center',
    padding: '100px 0 0 0'
  },
  hello: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    // fontSize: '18rem',
    lineHeight: '1.3',
    color: '#66FCF1',
    textAlign: 'center'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth={false} disableGutters>
          <Head>
            <title>Resume/Johnson Chung</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="icon" href="/resume-icon.svg" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          </Head>

          <main>    
            <SideMenu headers={headers} />
              <Container id={headers.intro}>
                <Typography variant="h3" className={classes.header} id="back-to-top-anchor">
                  JOHNSON CHUNG
                </Typography>
                <ThemeProvider theme={theme}>
                  <Typography variant="h1" className={classes.hello}>
                    HELLO                  
                  </Typography>                                
                </ThemeProvider>
              <Grid
                container
                spacing={3}
                justify="space-evenly"
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <Summary headers={headers} />
                </Grid>
                <Grid item xs={12}>
                  <Projects title={headers.projects} /> 
                </Grid>
                <Grid item xs={12}>                
                  <Skills title={headers.skills} />              
                </Grid>
                <Grid item xs={12}>                
                  <WorkEd title={headers.timeline} />
                </Grid>
                <Grid item xs={12}>
                  <ContactInfo title={headers.contact} />             
                </Grid>
              </Grid>
              </Container> 
          </main>

          <footer>
            <BackToTop />
          </footer>
      </Container>   
    </React.Fragment>
  )
}
