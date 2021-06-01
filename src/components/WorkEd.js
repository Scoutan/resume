import React from 'react'
import HeaderBar from '../components/HeaderBar'
import { 
  makeStyles, 
  Paper, 
  Card, CardContent, 
  Typography 
} from '@material-ui/core'
import {
  School,
  WorkOutline,
  History
} from '@material-ui/icons'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center'
  },
  paper: {
    padding: "6px 16px"
  }
}));

export default function WorkEd(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} id={props.title} elevation={0}>
      <HeaderBar icon={<History />} title={props.title} />
      <CardContent>        
        <School color="primary" fontSize="large" /> Education
        <WorkOutline color="primary" fontSize="large" /> Work
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Practice with React
                </Typography>
                <Typography>Because practice practive practive</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2000
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkOutline />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Code
              </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2000
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkOutline />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Code
              </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2000
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkOutline />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Code
              </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2000
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkOutline />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Code
              </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              2000
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkOutline />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Code
              </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}