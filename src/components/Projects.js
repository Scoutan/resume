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
        textDecoration: 'none',
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
                    <Grid item xs={5} sm={4}>
                        <Typography gutterBottom variant="h4">
                            <a className={classes.title} href={props.href} target="_blank" rel="noopener noreferrer">
                                {props.title}
                            </a>
                        </Typography>
                        <Typography variant="body1">
                            {props.desc}
                        </Typography>
                    </Grid>
                )
            case 'image':
                return (
                    <Grid item xs={5} sm={4} className={classes.imageWrapper}>                     
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
                <Grid container spacing={3} justify="center" alignItems="center">
                    <ProjectsTemplate
                        type="image"
                        href="https://chuko-cra.vercel.app/"
                        src="/screenshot-chuko.jpg"
                        alt="Chuko"
                    />
                    <ProjectsTemplate
                        type="info"
                        href="https://chuko-cra.vercel.app/"
                        title="&#8592; Chuko"
                        desc="My first personal project with web scraping functionality, created using Create React App, plain CSS, and Cheerio JS."
                    />
                    <Grid item xs={12} />
                    <ProjectsTemplate
                        type="info"
                        href="https://stephen-grider.vercel.app/"
                        title="Compilation of apps &#8594;"
                        desc="My compilation of the apps built in the online course “Modern React with Redux” on Udemy, put together using Next.js."
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