import React from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    Typography, 
    Button, ButtonGroup,
    AppBar, Toolbar,
    useScrollTrigger, Slide
} from '@material-ui/core'

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

const scrollAction = (props) => {
    return document.getElementById(props).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    })
}

const useStyles = makeStyles((theme) => ({
    toolBar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <div>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className={classes.toolBar}>
                        <ButtonGroup 
                            variant="text" 
                            color="inherit" 
                            aria-label="text primary button group"
                            size="large"
                        >
                            <Button onClick={() => scrollAction(props.headers.summary)}>
                                <Typography variant="h6">{props.headers.summary}</Typography>
                            </Button>
                            <Button onClick={() => scrollAction(props.headers.projects)}>
                                <Typography variant="h6">{props.headers.projects}</Typography>
                            </Button>
                            <Button onClick={() => scrollAction(props.headers.skills)}>
                                <Typography variant="h6">{props.headers.skills}</Typography>
                            </Button>
                            <Button onClick={() => scrollAction(props.headers.timeline)}>
                                <Typography variant="h6">{props.headers.timeline}</Typography>
                            </Button>
                            <Button onClick={() => scrollAction(props.headers.contact)}>
                                <Typography variant="h6">{props.headers.contact}</Typography>
                            </Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
        </div>
    )
}