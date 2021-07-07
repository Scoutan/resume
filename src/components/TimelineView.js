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
import { volkswagen, telus, concordiaTA, entechnevision } from '../components/Constants'

const useStyles = makeStyles({
  timelineView: props => ({
    visibility: props.visibility,
    display: props.timelineView
  }),
  switches: {
    justifyContent: 'center',
    margin: '0 0 30px 0',
    color: 'white'
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
          eventTime="Completed in Sept 2020"
          eventEmployer="Udemy"
          eventTitle='"Modern React with Redux"'
          eventDesc="52 hours online course by Stephen Grider"
        />
        <TimelineViewTemplate type="year" year="2020"/>
        <TimelineViewTemplate
          type="work"
          icon={<WorkOutline />}
          eventTime="May 2018 - Apr 2020"
          eventEmployer="Centre-Ville Volkswagen"
          eventTitle="Body Shop / Warranty Administrator"
          eventDesc={volkswagen}
        />
        <TimelineViewTemplate type="year" year="2018"/>
        <TimelineViewTemplate
          type="school-work"

          schoolTime="Completed in Apr 2018"
          schoolEmployer="TELUS (vendor for Google Suite)"
          schoolTitle='"CEB Effortless Experience"'
          schoolDesc="Gartner’s customer service training, offered by Google"

          workTime="Sept 2016 - May 2018"
          workEmployer="TELUS (vendor for Google Suite)"
          workTitle="Business Help Desk Specialist III"
          workDesc={telus}
        />
        <TimelineViewTemplate type="year" year="2016"/>      
        <TimelineViewTemplate 
          type="school-work"

          schoolTime="2014-2016 (on leave)"
          schoolEmployer="Concordia University"
          schoolTitle="M.A. in Philosophy"
          schoolDesc='Research topic: "Norms in Science"'

          workTime="Jan 2015 - May 2016"
          workEmployer="Concordia University"
          workTitle='Teaching Assistant for "Critical Thinking"'
          workDesc={concordiaTA}
        />
        <TimelineViewTemplate type="year" year="2014"/> 
        <TimelineViewTemplate 
          type="school"
          icon={<School />}
          eventTime="Awarded in 2014"
          eventEmployer="Concordia University"
          eventTitle="B.A. in Philosophy"
          eventDesc="Completed with Honours program’s criteria"
        />
        <TimelineViewTemplate type="year" year="2011"/> 
        <TimelineViewTemplate 
          type="school-work"

          workTime="May 2010 - Aug 2010"
          workEmployer="EnTechneVision"
          workTitle="Web Developer junior"
          workDesc={entechnevision}
      
          schoolTime="Awarded in 2011"
          schoolEmployer="Champlain College St-Lambert"
          schoolTitle="D.C.S. Computer Science Technology"
          schoolDesc="Includes 12 weeks internship"
        />
        <TimelineViewTemplate type="year" year="2006"/>
        <TimelineViewTemplate 
          type="school"
          icon={<School />}
          eventTime="Awarded in 2006"
          eventEmployer="École secondaire Antoine-Brossard"
          eventTitle="Diploma of Secondary Studies"
          eventDesc="High school studies"
        />          
      </Timeline>
    </DisplayContext.Provider>
  )
}