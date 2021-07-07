import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(5),
      right: theme.spacing(3),
    },
    arrow: {
        backgroundColor: '#66FCF1',
        color: '#0B0C10'
    }
  }));

function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });            
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired
};

export default function BackToTop(props) {
    const classes = useStyles();

    return (
        <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top" className={classes.arrow}>
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop> 
    );
}