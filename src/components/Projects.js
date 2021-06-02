import React from 'react'
import Image from 'next/image'
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Card, CardContent, CardActionArea, CardMedia,
    Grid,
    Typography,
    Divider
} from '@material-ui/core'
import {
    Apps
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center'
    },
    imageWrapper: {
        position: 'relative',
        height: '300px'
    },
    descriptionWrapper: {
        '& > h3': {
            color: '#66FCF1'
        }
    }
}));

export default function Projects(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<Apps />} title={props.title} />
            <CardContent>
                <Grid 
                    container
                    spacing={2}
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={5} sm={5} className={classes.imageWrapper}>                     
                        <a
                            href="https://chuko-cra.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                src="/screenshot-chuko.jpg"
                                alt="Chuko"
                                layout='fill'
                                objectFit='contain'                                
                            />
                        </a>                        
                    </Grid>
                    <Grid item xs={5} sm={5} className={classes.descriptionWrapper}>
                        <Typography gutterBottom variant="h3">
                            Chuko
                        </Typography>
                        <Typography variant="body1">
                            My personal React project!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} />     
                    <Grid item xs={12} sm={5} className={classes.descriptionWrapper}>
                        <Typography gutterBottom variant="h3" >
                            Compilation of apps
                        </Typography>
                        <Typography variant="body1">
                            From Stephen Grider's React/Redux course
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} className={classes.imageWrapper}>                        
                        <a
                            href="https://stephen-grider.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                src="/screenshot-SG.jpg"
                                alt="Compilation of apps"
                                layout='fill'
                                objectFit='contain'
                            />
                        </a>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}