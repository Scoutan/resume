import React from 'react'
import { 
  makeStyles, 
  Paper, 
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles({
  classicView: props => ({
    display: props.classicView
  }),
});

export default function ClassicView({ view }) {
    const classes = useStyles(view);

    return (
        <Grid container spacing={3} className={classes.classicView}>
          <Grid item xs={12}>
            <Paper>
              <Grid container spacing={1}>
                <Grid item xs={6} align="left">
                  Web Developer junior
                  <br />
                  EnTechneVision                  
                </Grid>
                <Grid item xs={6} align="right">
                  2011
                </Grid>
                <Grid item xs={12} align="left">
                  Using PHP, JS, and JQuery, for email newsletters and several website projects
                </Grid>
                <Grid item xs={12} align="left">
                  Skill used in bullet form
                  <br />
                  Skill used in bullet form
                  <br />
                  Skill used in bullet form
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
    )
}