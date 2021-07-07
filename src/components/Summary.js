import React from 'react'
import {
    makeStyles,
    Card, CardContent,
    IconButton,
    Typography
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { summary } from '../components/Constants'

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center',
        margin: '0 auto',
        padding: '0 0 260px 0',
        width: '970px',
        '@media (max-width:1015px)': {
            width: '892px'
        },
        '@media (max-width:920px)': {
            width: '780px'
        },
        '@media (max-width:820px)': {
            width: '560px'
        },
        '@media (max-width:450px)': {
            width: '340px',
            padding: '0 0 20px 0',
        }
    },
    text: {
        fontSize: '1.2rem',
        '@media (max-width:1015px)': {
            fontSize: '1.15rem'
        },
        '@media (max-width:920px)': {
            fontSize: '1.1rem'
        },
        '@media (max-width:820px)': {
            fontSize: '1.05rem'
        },
        '@media (max-width:450px)': {
            fontSize: '0.9rem'
        }
    },
    expandButton: {
        margin: '30px 0 0 0',
        transition: 'none',        
    },
    expandIcon: {
        fontSize: '100px',
        color: '#66FCF1',
    }
}));

const scrollToSection = (props) => {
    return document.getElementById(props).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    })
}

export default function Summary(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={0}>
            <CardContent>
                <Typography className={classes.text} variant="h6" align="center" gutterBottom>
                    {summary}
                </Typography>
                <IconButton className={classes.expandButton} onClick={() => scrollToSection(props.headers.projects)}>
                    <ExpandMore className={classes.expandIcon} />
                </IconButton>
            </CardContent>
        </Card>
    )
}