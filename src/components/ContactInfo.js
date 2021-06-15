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
        padding: '0 0 100px 0'
    },
    email: {
        color: '#66FCF1',
        textDecoration: 'none'
    }
}));

export default function ContactInfo(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<Email fontSize="large" />} title={props.title} />      
            <CardContent>
                <Typography variant="h5" gutterBottom>The best way to reach me is by email!</Typography>
                <a href='mailto:johnson.chungck@gmail.com' className={classes.email}>
                    <Typography variant="h4" gutterBottom>johnson.chungck@gmail.com</Typography>
                </a>
                <Typography variant="h6">Based in Montreal, QC</Typography>
            </CardContent>
        </Card>
    );
};