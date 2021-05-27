import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import WorkEd from '../components/WorkEd'
import ContactForm from '../components/ContactForm'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
//import styles from '../../styles/Home.module.css'
import {
  makeStyles,
  CssBaseline,
  Container,
  Grid,
  Paper,
  Card, CardContent
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3)
  },
  card: {
    textAlign: 'justify'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Head>
          <title>Resume</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>

        <main>
          <Paper className={classes.paper} elevation={1}>
            <Grid
              container
              spacing={3}
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <h1>Summary</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium augue, elementum aliquet leo. Integer lacinia metus metus, eu fermentum mi lobortis quis. Cras gravida eleifend libero quis pulvinar. Donec pharetra cursus velit semper aliquam. Ut elementum in libero lacinia suscipit. Cras at tellus sit amet mauris fringilla convallis et placerat velit. Vivamus ac dui et neque iaculis vehicula vitae vitae massa. Ut facilisis lacus sapien, nec rhoncus dolor bibendum a. Suspendisse rhoncus metus in velit mattis, at faucibus magna mollis. In nibh purus, sollicitudin nec nisi laoreet, lobortis sagittis ipsum. Donec est nisl, iaculis sed malesuada nec, dictum ut orci. Mauris ullamcorper, erat a dapibus sodales, ipsum sem facilisis arcu, vitae consequat orci quam et tellus.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Projects /> 
              </Grid>
              <Grid item xs={12}>                
                <Skills />              
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <WorkEd />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </Container>
    </React.Fragment>
  )
}
