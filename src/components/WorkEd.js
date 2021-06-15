import React, {useState} from 'react'
import HeaderBar from '../components/HeaderBar'
import { 
  makeStyles, 
  Paper, 
  Card, CardContent,
  Button,
  Typography,
  Divider,
  FormGroup, FormControlLabel, Switch
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
  visibility: props => ({
    visibility: props.visibility
  }),
  switches: {
    justifyContent: 'center'
  },
}));

export default function WorkEd(props) {
  const [display, setDisplay] = useState({
    workDisplay: 'block',
    workToggle: true,
    schoolDisplay: 'block',
    schoolToggle: true,
    iconDisplay: 'inline-flex',
    visibility: 'visible'
  });
  const classes = useStyles(display);

  const TimelineItemTemplate = (props) => {
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

  const toggleEducation = () => {
    if (display.schoolToggle) {
      if (display.workToggle) {
        setDisplay({ ...display, schoolDisplay: 'none', schoolToggle: false, iconDisplay: 'block' });
      } else {
        setDisplay({ ...display, schoolDisplay: 'none', schoolToggle: false, iconDisplay: 'block', visibility: 'hidden' });
      }
    } else if (display.workToggle) {
      setDisplay({ ...display, schoolDisplay: 'block', schoolToggle: true, iconDisplay: 'inline-flex', visibility: 'visible' });
    } else {
      setDisplay({ ...display, schoolDisplay: 'block', schoolToggle: true, iconDisplay: 'block', visibility: 'visible' });
    }
  }

  const toggleWork = () => {
    if (display.workToggle) {
      if (display.schoolToggle) {
        setDisplay({ ...display, workDisplay: 'none', workToggle: false, iconDisplay: 'block' });
      } else {
        setDisplay({ ...display, workDisplay: 'none', workToggle: false, iconDisplay: 'block', visibility: 'hidden' });
      }
    } else if (display.schoolToggle) {
      setDisplay({ ...display, workDisplay: 'block', workToggle: true, iconDisplay: 'inline-flex', visibility: 'visible' });
    } else {
      setDisplay({ ...display, workDisplay: 'block', workToggle: true, iconDisplay: 'block', visibility: 'visible' });
    }
  }

  return (
    <Card className={classes.card} id={props.title} elevation={0}>
      <HeaderBar icon={<History fontSize="large" />} title={props.title} />
      <FormGroup row className={classes.switches}>
        <FormControlLabel
          control={
            <Switch
              checked={display.schoolToggle}
              onChange={() => toggleEducation()}
              name="Education"
              color="primary"
            />
          }
          label="Education"
          labelPlacement="top"
        />
        <FormControlLabel
          control={
            <Switch
              checked={display.workToggle}
              onChange={() => toggleWork()}
              name="Work"
              color="secondary"
            />
          }
          label="Work"
          labelPlacement="top"
        />
      </FormGroup>
      <CardContent>
        <Timeline className={classes.visibility}>
          <TimelineItemTemplate type="year" year="Present"/>
          <TimelineItemTemplate
            type="school"
            icon={<School />}
            eventTime="2020-Present"
            eventEmployer="Self-study"
            eventTitle="React JS"
            eventDesc="Learning React JS through online courses and practice on personal projects"
          />
          <TimelineItemTemplate type="year" year="2020"/>
          <TimelineItemTemplate
            type="work"
            icon={<WorkOutline />}
            eventTime="2018-2020"
            eventEmployer="Centre-Ville Volkswagen"
            eventTitle="Body Shop / Warranty Administrator"
            eventDesc="Handle car insurance claims and warranty claims"
          />
          <TimelineItemTemplate type="year" year="2018"/>
          <TimelineItemTemplate
            type="work"
            icon={<WorkOutline />}
            eventTime="2016-2018"
            eventEmployer="TELUS"
            eventTitle="Business Help Desk Specialist III"
            eventDesc="Troubleshoot G Suite apps (e.g. Gmail, Calendar, Drive) for businesses"
          />
          <TimelineItemTemplate type="year" year="2016"/>      
          <TimelineItemTemplate 
            type="school-work"

            schoolTime="2014-2016"
            schoolEmployer="Concordia University"
            schoolTitle="M.A. in Philosophy"
            schoolDesc="Research paper yet to be completed"

            workTime="2015-2016"
            workEmployer="Concordia University"
            workTitle="Teaching Assistant for [Critical Thinking]"
            workDesc="Support and evaluate students"
          />
          <TimelineItemTemplate type="year" year="2014"/> 
          <TimelineItemTemplate 
            type="school"
            icon={<School />}
            eventTime="2011-2014"
            eventEmployer="Concordia University"
            eventTitle="B.A. in Philosophy"
            eventDesc="Study"
          />
          <TimelineItemTemplate type="year" year="2011"/> 
          <TimelineItemTemplate 
            type="school-work"

            workTime="2011"
            workEmployer="EnTechneVision"
            workTitle="Web Developer junior"
            workDesc="Using PHP, JS, and JQuery, for email newsletters and several website projects"
        
            schoolTime="2006-2011"
            schoolEmployer="Champlain Regional College St-Lambert"
            schoolTitle="D.C.S. Computer Science Technology"
            schoolDesc="Study"
          />
          <TimelineItemTemplate type="year" year="2006"/> 
        </Timeline>
      </CardContent>
    </Card>
  )
}