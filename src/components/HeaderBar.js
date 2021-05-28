import React from 'react'
import {
    makeStyles,
    Typography,
    Toolbar, IconButton
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    toolBar: {
        backgroundColor: '#3f51b5',
        color: '#fff'
    }
}));

export default function HeaderBar(props) {
    const classes = useStyles();

    return (
        <Toolbar className={classes.toolBar}>
            <IconButton edge="start" color="inherit" aria-label="menu">
                {props.icon}
            </IconButton>
            <Typography variant="h5">
                {props.title}
            </Typography>
        </Toolbar>            
    )
}