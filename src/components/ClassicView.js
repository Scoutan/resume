import React from 'react'
import ClassicViewTemplate from '../components/ClassicViewTemplate'
import { 
  makeStyles, 
  Paper, 
  Grid,
  Typography
} from '@material-ui/core'
import {
  School,
  WorkOutline
} from '@material-ui/icons'
import { volkswagen, telus, concordiaTA, entechnevision } from '../components/Constants'

const useStyles = makeStyles({
  classicView: props => ({
    display: props.classicView,
  }),
  headerColor: {
    color: '#66FCF1',
    margin: '30px 0 5px 0'
  }
});

export default function ClassicView({ view }) {
    const classes = useStyles(view);

    return (
        <Grid container spacing={2} className={classes.classicView}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.headerColor}>
              <WorkOutline fontSize="large" /> Work Experience
            </Typography>
          </Grid>
          <ClassicViewTemplate 
            type="work"
            workTitle="Body Shop / Warranty Administrator"
            workEmployer="Centre-Ville Volkswagen"
            workYear="May 2018 - Apr 2020"
            workDesc={volkswagen}
          />
          <ClassicViewTemplate 
            type="work"
            workTitle="Business Help Desk Specialist III"
            workEmployer="TELUS (vendor for Google Suite)"
            workYear="Sept 2016 - May 2018"
            workDesc={telus}
          />
          <ClassicViewTemplate 
            type="work"
            workTitle='Teaching Assistant for "Critical Thinking"'
            workEmployer="Concordia University"
            workYear="Jan 2015 - May 2016"
            workDesc={concordiaTA}
          />
          <ClassicViewTemplate 
            type="work"
            workTitle="Web Developer Junior"
            workEmployer="EnTechneVision"
            workYear="May 2010 - Aug 2010"
            workDesc={entechnevision}
          />
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.headerColor}>
              <School fontSize="large" /> Education / Training
            </Typography>
          </Grid>
          <ClassicViewTemplate 
            type="school"
            schoolTitle='"Modern React with Redux"'
            schoolName="Udemy"
            schoolYear="Completed in Sept 2020"
            schoolDesc="52 hours online course by Stephen Grider"
          />
          <ClassicViewTemplate 
            type="school"
            schoolTitle='"CEB Effortless Experience"'
            schoolName="TELUS (vendor for Google Suite)"
            schoolYear="Completed in Apr 2018"
            schoolDesc="Gartner’s customer service training"
          />
          <ClassicViewTemplate 
            type="school"
            schoolTitle="M.A. in Philosophy"
            schoolName="Concordia University"
            schoolYear="2014-2016 (on leave)"
            schoolDesc='Research topic: "Norms in Science"'
          />
          <ClassicViewTemplate 
            type="school"
            schoolTitle="B.A. in Philosophy"
            schoolName="Concordia University"
            schoolYear="Awarded in 2014"
            schoolDesc="Completed with Honours program’s criteria"
          />
          <ClassicViewTemplate 
            type="school"
            schoolTitle="D.C.S. Computer Science Technology"
            schoolName="Champlain College St-Lambert"
            schoolYear="Awarded in 2011"
            schoolDesc="Includes 12 weeks internship"
          />
        </Grid>
    )
}