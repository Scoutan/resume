import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    Button, IconButton, Tooltip,
    Menu, MenuItem,
    AppBar, Toolbar,
    useScrollTrigger,
} from '@material-ui/core';
import { 
    Bookmarks,
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
        className: trigger ? classes.test : null
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
    bookmarks: {
        position: 'fixed',
        color: '#66FCF1',
        top: '10px',
        left: '30px',
    },
    expand: {
        position: 'fixed',
        color: '#66FCF1',
        top: '30px',
        left: '90px',        
    },
    git: {
        position: 'fixed',
        color: '#66FCF1',
        top: '18px',
        right: '300px',
        padding: '0'
    },
    email: {
        position: 'fixed',
        color: '#66FCF1',
        top: '10px',
        right: '10px',
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
        color: '#FFF',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        letterSpacing: '0.3em',
    },
    test: {
        background: 'rgb(31, 40, 51, 0.75)'
    }
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
        <div>
            <ContrastOnScroll {...props}>
                <AppBar className={classes.appBar} color='transparent' elevation={0}>
                    <Toolbar id="back-to-top-anchor">
                        <Button 
                            className={classes.bookmarks} 
                            onClick={handleClick}
                            startIcon={<Bookmarks />}
                        >
                            Bookmarks                            
                        </Button>
                        <ExpandMore className={classes.expand} />
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
                                onClick={() => scrollToSection(props.headers.projects)}>
                                    Projects
                            </MenuItem>
                            <MenuItem 
                                className={classes.menuItem} 
                                onClick={() => scrollToSection(props.headers.skills)}>
                                    Technical Skills
                            </MenuItem>
                            <MenuItem 
                                className={classes.menuItem} 
                                onClick={() => scrollToSection(props.headers.timeline)}>
                                    History
                            </MenuItem>
                            <MenuItem 
                                className={classes.menuItem} 
                                onClick={() => scrollToSection(props.headers.contact)}>
                                    Contact Form
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>        
            </ContrastOnScroll>
            <Toolbar id="back-to-top-anchor" />
        </div>
    );
}
