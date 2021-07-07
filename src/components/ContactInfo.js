import React from 'react';
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Card, CardContent,
    Typography
} from '@material-ui/core'
import { Email } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center',
        padding: '0 0 0px 0'
    },
    textLink: {
        color: '#66FCF1',
        textDecoration: 'none'
    },
    email: {
        fontSize: '2.1rem',
        '@media (max-width:560px)': {
            fontSize: '1.7rem',
        },
        '@media (max-width:420px)': {
            fontSize: '1.5rem',
        }
    },
    footer: {
        margin: '50px 0 0 0'
    }
}));

export default function ContactInfo(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<Email />} title={props.title} />      
            <CardContent>
                <Typography variant="h5" gutterBottom>The best way to reach me is by email:</Typography>
                <a href='mailto:johnson.chungck@gmail.com' className={classes.textLink}>
                    <Typography variant="h4" gutterBottom className={classes.email}>johnson.chungck@gmail.com</Typography>
                </a>
                <Typography variant="h6" gutterBottom>Based in Montreal, QC</Typography>
                <a className={classes.textLink} href='https://github.com/Scoutan/resume' target="_blank" rel="noopener noreferrer">
                    <Typography className={classes.footer}>
                        View source code on GitHub
                    </Typography>
                </a>
            </CardContent>
        </Card>
    );
};