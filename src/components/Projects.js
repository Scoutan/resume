import React from 'react'
import Image from 'next/image'
import {
    makeStyles,
    Card, CardHeader, CardContent,
    List, ListItem, ListItemAvatar, ListItemText,
    Avatar,
    Divider
  } from '@material-ui/core'
  import {
    Apps
  } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    card: {
        textAlign: 'justify'
    },
    transparentBG: {
        backgroundColor: 'inherit'
    }
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>        
            <CardHeader
                avatar={
                    <Avatar className={classes.transparentBG}>
                        <Apps color="primary" fontSize="large" />
                    </Avatar>   
                }
                title="Projects"                
            />
            <CardContent>             
                <List>                    
                    <ListItem>
                        <a
                            href="https://chuko-cra.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ListItemAvatar>
                            <Image 
                                alt="Chuko" 
                                src="/screenshot-chuko.jpg" 
                                width={206}
                                height={116}
                            />
                            </ListItemAvatar>
                        </a>
                        <a
                            href="https://chuko-cra.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ListItemText primary="Chuko" secondary="My personal React project!" />
                        </a>
                    </ListItem>                    
                    <Divider component="li" />
                    <a
                        href="https://stephen-grider.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <ListItem>
                        <ListItemAvatar>
                        <Image 
                            alt="Chuko" 
                            src="/screenshot-SG.jpg" 
                            width={206}
                            height={116}
                        />
                        </ListItemAvatar>
                        <ListItemText primary="Compilation of apps" secondary="From Stephen Grider's React/Redux course" />
                    </ListItem>
                    </a>
                    <Divider component="li" />
                </List>
            </CardContent>
        </Card>
    )
}