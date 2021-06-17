import React, {useState} from 'react'
import HeaderBar from '../components/HeaderBar'
import TimelineView from '../components/TimelineView'
import ClassicView from '../components/ClassicView'
import { 
  makeStyles, 
  Paper, 
  Card, CardContent,
  Grid,
  FormGroup, FormControlLabel, Switch,
} from '@material-ui/core'
import { History } from '@material-ui/icons'

const useStyles = makeStyles({
  card: {
    backgroundColor: 'inherit',
    color: '#C5C6C7',
    textAlign: 'center',
    '& .MuiTimelineItem-root': {
      minHeight: '0',
    },
  },
  switch: {
    justifyContent: 'center',
  }
});

export default function WorkEd(props) {
  const [view, setView] = useState({
    viewToggle: true,
    timelineView: 'block',
    classicView: 'none'
  });

  const classes = useStyles(view);

  const toggleView = () => {
    if (view.viewToggle) {
      setView({ ...view, viewToggle: false, timelineView: 'none', classicView: 'block' })
    } else {
      setView({ ...view, viewToggle: true, timelineView: 'block', classicView: 'none' })
    }
  }

  return (
    <Card className={classes.card} id={props.title} elevation={0}>
      <HeaderBar icon={<History />} title={props.title} />
      <FormGroup row className={classes.switch}>
        <FormControlLabel
          control={
            <Switch
              checked={view.viewToggle}
              onChange={() => toggleView()}
              name="View"
              color="default"
            />
          }
          label="Classic | Timeline"
          labelPlacement="top"
        />
      </FormGroup>
      <CardContent>
        <TimelineView view={view}/>
        <ClassicView view={view}/>
      </CardContent>
    </Card>
  )
}