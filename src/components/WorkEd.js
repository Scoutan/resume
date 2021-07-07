import React, {useState, useEffect} from 'react'
import HeaderBar from '../components/HeaderBar'
import TimelineView from '../components/TimelineView'
import ClassicView from '../components/ClassicView'
import { 
  makeStyles,
  Card, CardContent,
  FormGroup, FormControlLabel, Switch, Typography,
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
    color: 'white'
  },
  labelPlacementTop: {
    marginLeft: '24px'
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

  useEffect(() => {
    if (window.innerWidth < 1024) {
      return setView({ ...view, viewToggle: false, timelineView: 'none', classicView: 'block' })
    } else {
      return null
    }
  }, [])

  return (
    <Card className={classes.card} id={props.title} elevation={0}>
      <HeaderBar icon={<History />} title={props.title} />      
      <Typography variant="h6">View</Typography>
      <FormGroup row className={classes.switch}>
        <FormControlLabel
          control={
            <Switch
              checked={view.viewToggle}
              onChange={() => toggleView()}
              name="View"
              color="primary"           
            />
          }
          label="Classic | Timeline"
          labelPlacement="top"
          classes={{labelPlacementTop: classes.labelPlacementTop}}
        />
      </FormGroup>
      <CardContent>
        <TimelineView view={view}/>
        <ClassicView view={view}/>
      </CardContent>
    </Card>
  )
}