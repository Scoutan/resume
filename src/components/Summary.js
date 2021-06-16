import React from 'react'
import {
    makeStyles,
    Card, CardContent,
    IconButton,
    Typography
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

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
        }
    },
    expandButton: {
        margin: '30px 0 0 0',
        transition: 'none'
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
                    Freshly self-taught Front-End React Developer with a proven record in troubleshooting and problem solving.
                    Relevant competencies include 2 years of experience in troubleshooting G Suite (Google Workspace) products and a diploma in Computer Science with a focus on web development with PHP.
                    Naturally analytical, self-motivated, well-organized, able to perform under minimal supervision in accordance with deadlines, and a strong advocate for professional integrity.
                </Typography>
                <IconButton className={classes.expandButton}>
                    <ExpandMore onClick={() => scrollToSection(props.headers.projects)} className={classes.expandIcon} />
                </IconButton>
            </CardContent>
        </Card>
    )
}