import React, {useState} from 'react'
import { DisplayContext } from '../components/DisplayContext'
import TimelineViewTemplate from '../components/TimelineViewTemplate'
import { 
  makeStyles,
  FormGroup, FormControlLabel, Switch,
} from '@material-ui/core'
import {
  School,
  WorkOutline
} from '@material-ui/icons'
import {
  Timeline
} from '@material-ui/lab'

const useStyles = makeStyles({
  timelineView: props => ({
    visibility: props.visibility,
    display: props.timelineView
  }),
  switches: {
    justifyContent: 'center',
    margin: '0 0 30px 0'
  },
});

export default function TimelineView({ view }) {
  const [display, setDisplay] = useState({
    workDisplay: 'block',
    workToggle: true,
    schoolDisplay: 'block',
    schoolToggle: true,
    iconDisplay: 'inline-flex',
    visibility: 'visible',
  });

  const classes = useStyles(view);

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
    <DisplayContext.Provider value={display}>
      <Timeline className={classes.timelineView}> 
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
        <TimelineViewTemplate type="year" year="Present"/>
        <TimelineViewTemplate
          type="school"
          icon={<School />}
          eventTime="2020-Present"
          eventEmployer="Self-study"
          eventTitle="React JS"
          eventDesc="Learning React JS through online courses and practice on personal projects"
        />
        <TimelineViewTemplate type="year" year="2020"/>
        <TimelineViewTemplate
          type="work"
          icon={<WorkOutline />}
          eventTime="2018-2020"
          eventEmployer="Centre-Ville Volkswagen"
          eventTitle="Body Shop / Warranty Administrator"
          eventDesc="Handle car insurance claims and warranty claims"
        />
        <TimelineViewTemplate type="year" year="2018"/>
        <TimelineViewTemplate
          type="work"
          icon={<WorkOutline />}
          eventTime="2016-2018"
          eventEmployer="TELUS"
          eventTitle="Business Help Desk Specialist III"
          eventDesc="Troubleshoot G Suite apps (e.g. Gmail, Calendar, Drive) for businesses"
        />
        <TimelineViewTemplate type="year" year="2016"/>      
        <TimelineViewTemplate 
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
        <TimelineViewTemplate type="year" year="2014"/> 
        <TimelineViewTemplate 
          type="school"
          icon={<School />}
          eventTime="2011-2014"
          eventEmployer="Concordia University"
          eventTitle="B.A. in Philosophy"
          eventDesc="Study"
        />
        <TimelineViewTemplate type="year" year="2011"/> 
        <TimelineViewTemplate 
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
        <TimelineViewTemplate type="year" year="2006"/>            
      </Timeline>
    </DisplayContext.Provider>
  )
}