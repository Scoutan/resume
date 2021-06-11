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
  eventHeader: {
    color: '#45A29E'
  },
  eventInfo: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    padding: '5px 10px 5px 15px',
    color: 'inherit'
  },
  eventTitle: {
    color: 'white'
  },
  eventBox: {
    textAlign: 'center',
    minHeight: '100px'
  },
  year: {
    color: '#66FCF1'
  }
}));

export default function WorkEd(props) {
  const classes = useStyles();

  const TimelineItemTemplate = (props) => {
    switch (props.type) {
      case 'work':
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.eventBox} />
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot color="secondary">
                  {props.icon}
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.eventBox}>              
              <Paper elevation={3} className={classes.eventInfo}>
                <Typography variant="h5" className={classes.eventHeader}>{props.eventTime}</Typography>                
                <Typography variant="h5" className={classes.eventTitle}>{props.eventTitle}</Typography>
                <Typography variant="subtitle2">{props.eventEmployer}</Typography>
                <Typography className={classes.eventDesc}>{props.eventDesc}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem> 
        )
      case 'school':
        return (
          <TimelineItem>
            <TimelineOppositeContent className={classes.eventBox}>
              <Paper elevation={3} className={classes.eventInfo}>
                <Typography variant="h5" className={classes.eventHeader}>{props.eventTime}</Typography>                
                <Typography variant="h5" className={classes.eventTitle}>{props.eventTitle}</Typography>
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
            <TimelineContent className={classes.eventBox} />
          </TimelineItem> 
        )
      case 'year':
        return (
          <TimelineItem>
            <TimelineOppositeContent />
            <TimelineSeparator>
              <Typography variant="h2" className={classes.year}>
                {props.year}
              </Typography>
            </TimelineSeparator>
            <TimelineContent />                
          </TimelineItem> 
        )
    }
  }

  return (
    <Card className={classes.card} id={props.title} elevation={0}>
      <HeaderBar icon={<History />} title={props.title} />
      <CardContent>
        <Timeline>
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
            type="work"
            icon={<WorkOutline />}
            eventTime="2015-2016"
            eventEmployer="Concordia University"
            eventTitle="Teaching Assistant for [Critical Thinking]"
            eventDesc="Support and evaluate students"
          />          
          <TimelineItemTemplate 
            type="school"
            icon={<School />}
            eventTime="2014-2016"
            eventEmployer="Concordia University"
            eventTitle="M.A. in Philosophy"
            eventDesc="Research paper yet to be completed"
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
          <TimelineItemTemplate 
            type="work"
            icon={<WorkOutline />}
            eventTime="2011"
            eventEmployer="EnTechneVision"
            eventTitle="Web Developer junior"
            eventDesc="Using PHP, JS, and JQuery, for email newsletters and several website projects"
          />
          <TimelineItemTemplate type="year" year="2011"/> 
          <TimelineItemTemplate 
            type="school"
            icon={<School />}
            eventTime="2006-2011"
            eventEmployer="Champlain Regional College St-Lambert"
            eventTitle="D.C.S. Computer Science Technology"
            eventDesc="Study"
          />
          <TimelineItemTemplate type="year" year="2006"/> 
        </Timeline>
      </CardContent>
    </Card>
  )
}