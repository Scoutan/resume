import React from 'react'
import Image from 'next/image'
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Card, CardContent,
    Grid,
    Typography,
} from '@material-ui/core'
import {
    Apps
} from '@material-ui/icons'

const useStyles = makeStyles({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center'
    },
    imageWrapper: {
        position: 'relative',
        minHeight: '200px'
    },
    title: {
        color: '#66FCF1',
        '@media (max-width:450px)': {
            fontSize: '2rem'
        }
    }
});

export default function Projects(props) {
    const classes = useStyles();

    const ProjectsTemplate = (props) => {
        switch (props.type) {
            case 'info':
                return (
                    <Grid item xs={5} sm={5}>
                        <Typography gutterBottom variant="h3" className={classes.title}>
                            {props.title}
                        </Typography>
                        <Typography variant="body1">
                            {props.desc}
                        </Typography>
                    </Grid>
                )
            case 'image':
                return (
                    <Grid item xs={5} sm={5} className={classes.imageWrapper}>                     
                        <a href={props.href} target="_blank" rel="noopener noreferrer">
                            <Image 
                                src={props.src}
                                alt={props.alt}
                                layout='fill'
                                objectFit='contain'                                
                            />
                        </a>                        
                    </Grid>
                )
        }
    }

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<Apps />} title={props.title} />
            <CardContent>
                <Grid container spacing={2} justify="space-evenly" alignItems="center">
                    <ProjectsTemplate
                        type="image"
                        href="https://chuko-cra.vercel.app/"
                        src="/screenshot-chuko.jpg"
                        alt="Chuko"
                    />
                    <ProjectsTemplate
                        type="info"
                        title="Chuko"
                        desc="My personal React project"
                    />
                    <Grid item xs={12} />
                    <ProjectsTemplate
                        type="info"
                        title="Compilation of apps"
                        desc="From Stephen Grider's React/Redux course"
                    />
                    <ProjectsTemplate
                        type="image"
                        href="https://stephen-grider.vercel.app/"
                        src="/screenshot-SG.jpg"
                        alt="Compilation of apps"
                    />
                </Grid>
            </CardContent>
        </Card>
    )
}