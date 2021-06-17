import React, { useContext } from 'react'
import { DisplayContext } from '../components/DisplayContext'
import { 
    makeStyles, 
    Paper,
    Typography,
    Divider,
    FormGroup, FormControlLabel, Switch,
  } from '@material-ui/core'
  import {
    School,
    WorkOutline
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

const useStyles = makeStyles({
    year: {
      color: '#FFF',
      border: '2px solid #C5C6C7',
      borderRadius: '5px',
      padding: '0 0 0 10px',
      letterSpacing: '0.3em'
    },
    eventTime: {
      color: '#FFF'
    },
    workInfo: {
      backgroundColor: 'rgba(255,0,0,0.05)',
      borderRadius: '20px',
      padding: '5px 10px 5px 15px',
      color: 'inherit'
    },
    schoolInfo: {
      backgroundColor: 'rgba(0,0,255,0.05)',
      borderRadius: '20px',
      padding: '5px 10px 5px 15px',
      color: 'inherit'
    },
    eventTitle: {
      color: '#66FCF1'
    },
    twoDots: props => ({
      display: props.iconDisplay
    }),
    eventWorkBox: props => ({
      textAlign: 'center',
      minHeight: '0px',
      display: props.workDisplay
    }),
    eventSchoolBox: props => ({
      textAlign: 'center',
      minHeight: '0px',
      display: props.schoolDisplay
    }),
    switches: {
      justifyContent: 'center'
    },
});


export default function TimelineViewTemplate(props) {
    const theState = useContext(DisplayContext);
    const classes = useStyles(theState);

    switch (props.type) {
      case 'work':
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.eventSchoolBox} />
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot color="secondary">
                  {props.icon}
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.eventWorkBox}>              
              <Paper elevation={3} className={classes.workInfo}>
                <Typography variant="h5" className={classes.eventTitle}>{props.eventTitle}</Typography>
                <Typography variant="h5" className={classes.eventTime}>{props.eventTime}</Typography>                
                <Typography variant="subtitle2">{props.eventEmployer}</Typography>
                <Typography className={classes.eventDesc}>{props.eventDesc}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem> 
        )
      case 'school':
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.eventSchoolBox}>
              <Paper elevation={3} className={classes.schoolInfo}>
                <Typography variant="h5" className={classes.eventTitle}>{props.eventTitle}</Typography>
                <Typography variant="h5" className={classes.eventTime}>{props.eventTime}</Typography>                                
                <Typography variant="subtitle2">{props.eventEmployer}</Typography>
                <Typography>{props.eventDesc}</Typography>
              </Paper>
              </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot color="primary">
                  <School />
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>          
            <TimelineContent className={classes.eventWorkBox} />
          </TimelineItem> 
        )
      case 'school-work':
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.eventSchoolBox}>
              <Paper elevation={3} className={classes.schoolInfo}>
                <Typography variant="h5" className={classes.eventTitle}>{props.schoolTitle}</Typography>
                <Typography variant="h5" className={classes.eventTime}>{props.schoolTime}</Typography>                
                <Typography variant="subtitle2">{props.schoolEmployer}</Typography>
                <Typography>{props.schoolDesc}</Typography>
              </Paper>
              </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                <div className={classes.twoDots}>
                  <TimelineDot color="primary">
                    <School /> 
                  </TimelineDot>
                  <Divider orientation="vertical" flexItem/>
                  <TimelineDot color="secondary">
                    <WorkOutline />        
                  </TimelineDot>                
                </div>
              <TimelineConnector />
            </TimelineSeparator>          
            <TimelineContent className={classes.eventWorkBox}>
              <Paper elevation={3} className={classes.workInfo}>
                <Typography variant="h5" className={classes.eventTitle}>{props.workTitle}</Typography>
                <Typography variant="h5" className={classes.eventTime}>{props.workTime}</Typography>                
                <Typography variant="subtitle2">{props.workEmployer}</Typography>
                <Typography>{props.workDesc}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem> 
        )
      case 'year':
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.eventSchoolBox} />
            <TimelineSeparator>
              <Typography variant="h4" component="div" className={classes.year}>
                {props.year}
              </Typography>
            </TimelineSeparator>
            <TimelineContent className={classes.eventWorkBox} />                
          </TimelineItem> 
        )
    }
  }