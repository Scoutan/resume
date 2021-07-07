import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    Button, IconButton, Tooltip,
    Menu, MenuItem,
    AppBar, Toolbar, useScrollTrigger,
    Typography,
} from '@material-ui/core';
import {
    MailOutline,
    GitHub,
    ExpandMore
} from '@material-ui/icons'

function ContrastOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true
    });

    const classes = useStyles();

    return React.cloneElement(children, {
        className: trigger ? classes.appBar : null
    })
}

ContrastOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

const scrollToSection = (props) => {
    return document.getElementById(props).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    })
}

const useStyles = makeStyles(() => ({
    appBar: {
        background: 'rgb(31, 40, 51, 0.75)'
    },
    toolbar: {
        minHeight: '50px'
    },
    menuButton: {
        position: 'fixed',
        color: '#66FCF1',
        top: '10px',
        left: '30px',
        fontWeight: '700'
    },
    expand: {
        position: 'fixed',
        color: '#66FCF1',
        top: '28px',
        left: '50px',        
    },
    git: {
        position: 'fixed',
        color: '#66FCF1',
        top: '18px',
        right: '300px',
        padding: '0',
        '@media (max-width:400px)': {
            top: '16px',
            right: '230px',
        }
    },
    email: {
        position: 'fixed',
        color: '#66FCF1',
        top: '10px',
        right: '10px',
        '@media (max-width:400px)': {
            fontSize: '0.7em'
        }
    },
    menu: {
        backgroundColor: '#1F2833',                
        border: '1px solid #45A29E',
        padding: '10px 0'
    },
    menuOpacity: {
        opacity: '0.9',
    },
    menuItem: {
        color: '#66FCF1',
        fontSize: '1.1rem',
        lineHeight: '2.5',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
    },
}));

export default function SideMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <ContrastOnScroll {...props}>
            <AppBar color='transparent' elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.menuButton} onClick={handleClick}>
                        Menu
                        <ExpandMore className={classes.expand} />                       
                    </Button>
                    <a href='https://github.com/Scoutan' target="_blank" rel="noopener noreferrer">
                        <IconButton className={classes.git}>
                        <Tooltip title="github.com/Scoutan" arrow>
                            <GitHub fontSize="small" />
                            </Tooltip>
                        </IconButton>
                    </a>                        
                    <Button 
                        className={classes.email}
                        startIcon={<MailOutline />}
                        href='mailto:johnson.chungck@gmail.com'
                    >
                            johnson.chungck@gmail.com
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        classes={{paper: classes.menu}}
                        className={classes.menuOpacity}
                        elevation={0}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        disableScrollLock={true}
                    >
                        <MenuItem 
                            className={classes.menuItem} 
                            onClick={() => scrollToSection(props.headers.intro)}>
                                TOP
                        </MenuItem>
                        <MenuItem 
                            className={classes.menuItem} 
                            onClick={() => scrollToSection(props.headers.projects)}>
                                {props.headers.projects}
                        </MenuItem>
                        <MenuItem 
                            className={classes.menuItem} 
                            onClick={() => scrollToSection(props.headers.skills)}>
                                {props.headers.skills}
                        </MenuItem>
                        <MenuItem 
                            className={classes.menuItem} 
                            onClick={() => scrollToSection(props.headers.timeline)}>
                                {props.headers.timeline}
                        </MenuItem>
                        <MenuItem 
                            className={classes.menuItem} 
                            onClick={() => scrollToSection(props.headers.contact)}>
                                {props.headers.contact}
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>        
        </ContrastOnScroll>
    );
}
