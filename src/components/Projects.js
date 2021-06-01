import React from 'react'
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Card, CardContent, CardActionArea, CardMedia,
    Grid,
    Typography
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
    item: {
        maxWidth: 350,
        margin: '0 auto',
        boxShadow: '2px 3px 1px #999999'
    },
    media: {
        height: 140
    },
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
                    <Grid item xs={12} sm={5}>
                        <Card className={classes.item} variant="outlined">                    
                            <CardActionArea>                        
                                <a
                                    href="https://chuko-cra.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CardMedia
                                        className={classes.media}
                                        image="/screenshot-chuko.jpg"
                                        title="Chuko"
                                    />
                                </a>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Chuko
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        My personal React project!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>                   
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Card className={classes.item} variant="outlined">                    
                            <CardActionArea>                        
                                <a
                                    href="https://stephen-grider.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CardMedia
                                        className={classes.media}
                                        image="/screenshot-SG.jpg"
                                        title="Compilation of apps"
                                    />
                                </a>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Compilation of apps
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        From Stephen Grider's React/Redux course
                                    </Typography>
                                </CardContent>
                            </CardActionArea>                   
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}