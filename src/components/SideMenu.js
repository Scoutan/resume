import React from 'react';
import {
    makeStyles,
    Button,
    Menu, MenuItem
} from '@material-ui/core';
import { Bookmarks } from '@material-ui/icons'
import { MailOutline } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
    bookmarks: {
        position: 'absolute',
        color: '#66FCF1',
        top: '10px',
        left: '10px',
        zIndex: '1'
    },
    email: {
        position: 'absolute',
        color: '#66FCF1',
        top: '10px',
        right: '10px',
    }
}));

export default function SideMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Button 
        className={classes.bookmarks} 
        onClick={handleClick}
        startIcon={<Bookmarks />}
        >
            Bookmarks
      </Button>
      
      <Button 
        className={classes.email}
        startIcon={<MailOutline />}
        >
            johnson.chungck@gmail.com
        </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
      >
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Technical Skills</MenuItem>
        <MenuItem onClick={handleClose}>History</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
  );
}
