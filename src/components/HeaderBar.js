import React from 'react'
import {
    makeStyles,
    Typography,
    Toolbar, IconButton,
    Box
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    sectionHeader: {
        backgroundColor: '#1F2833',
        color: '#66FCF1',
        textAlign: 'center',
        border: '2px solid #45A29E',
        borderRadius: '5px',
        display: 'inline-block',
        padding: '5px 15px',
    }
}));

export default function HeaderBar(props) {
    const classes = useStyles();

    return (
        <Box className={classes.sectionHeader}>
            <Typography variant="h5">
                {props.icon} {props.title}
            </Typography>
        </Box>            
    )
}