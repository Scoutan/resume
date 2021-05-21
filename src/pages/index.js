import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import WorkEd from '../components/WorkEd'
//import styles from '../../styles/Home.module.css'
import {
  makeStyles,
  CssBaseline,
  Container,
  Grid,
  Paper,
  Card, CardContent,
  List, ListItem, ListItemAvatar, ListItemText,
  Avatar,
  Divider
} from '@material-ui/core'
import {
  DeveloperMode,
  Apps
} from '@material-ui/icons'

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
              <Grid item xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <DeveloperMode color="primary" fontSize="large" /> Web Development Skills
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt="React logo" src="/React-icon.svg" />
                        </ListItemAvatar>
                        <ListItemText primary="React JS" secondary="Since September 2020" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt="CSS3 logo" src="/CSS3-icon.svg" />
                        </ListItemAvatar>
                        <ListItemText primary="CSS" secondary="Refreshed since March 2021" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            Img
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="title" secondary="description" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Card className={classes.card}>
                  <CardContent>
                    <Apps color="primary" fontSize="large" /> Projects
                    <List>
                      <a
                        href="https://chuko-cra.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar alt="Chuko">
                              C
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Chuko" secondary="My personal React project!" />
                        </ListItem>
                      </a>
                      <Divider variant="inset" component="li" />
                      <a
                        href="https://stephen-grider.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar alt="Compilation of apps">
                              C
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Compilation of apps" secondary="From Stephen Grider's React/Redux course" />
                        </ListItem>
                      </a>
                      <Divider variant="inset" component="li" />
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <WorkEd />
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
