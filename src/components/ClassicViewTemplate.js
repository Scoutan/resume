import React from 'react'
import { 
    makeStyles, 
    Paper,
    Typography,
    Grid
  } from '@material-ui/core'

const useStyles = makeStyles({
    paper: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: '10px 15px',
        margin: '0px 30px',
        color: 'white'
    },
    header: {
        color: '#66FCF1'
    },
    desc: {
        padding: '0 5px'
    },
    schoolMargin: {
        margin: '0 auto'
    }
});

export default function ClassicViewTemplate(props) {
    const classes = useStyles();

    switch (props.type) {
      case 'work':
        return (
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item xs={8} align="left">
                            <Typography variant="h5" className={classes.header}>
                                {props.workTitle}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                {props.workEmployer}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} align="right">
                            <Typography variant="h5" className={classes.header}>
                                {props.workYear}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="left">
                            {props.workDesc.map(desc =>                                 
                                <Typography variant="body1" className={classes.desc} key={Math.random().toString(36).substr(2, 9)}>
                                    &rarr; {desc}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    case 'school':
        return (
            <Grid item xs={12} md={10} lg={8} className={classes.schoolMargin}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item xs={7} align="left">
                            <Typography variant="h5" className={classes.header}>
                                {props.schoolTitle}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                {props.schoolName}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} align="right">
                            <Typography variant="h6" className={classes.header}>
                                {props.schoolYear}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="left">
                            <Typography variant="body1" paragraph>
                                {props.schoolDesc}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }
  }