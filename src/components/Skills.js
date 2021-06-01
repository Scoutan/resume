import React from 'react'
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Grid,
    Card, CardContent,
    Typography,
    List, ListItem, ListItemAvatar, ListItemText,
    Avatar,
    Divider
  } from '@material-ui/core'
  import {
    DeveloperMode
  } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center'
    }
}));

export default function Skills(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<DeveloperMode />} title={props.title} />      
            <CardContent>
                <Grid
                container
                spacing={2}
                justify="space-evenly"
                alignItems="flex-start"
                >
                    <Grid item sm={12} md={5}>            
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="React logo" src="/React-icon.svg" />
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography>React JS</Typography>
                                    <Typography>Create React App / Next.js</Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>R</Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography>Redux</Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="CSS3 logo" src="/CSS3-icon.svg" />
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography>CSS</Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>P</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="PHP" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </Grid>
                    <Grid item sm={12} md={5}>            
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>M</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://material-ui.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="Material-UI" secondary="React UI framework " />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />                            
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>S</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://semantic-ui.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="Semantic-UI" secondary="React UI framework" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>F</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://formik.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >                                
                                    <ListItemText primary="Formik" secondary="React form library" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>R</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://redux-form.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="Redux Form" secondary="Managing forms in Redux" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>C</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://cheerio.js.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="Cheerio JS" secondary="Markup parser" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>J</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://github.com/typicode/json-server"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="JSON server" secondary="Fake REST API for testing" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </Grid>                    
                    <Grid item sm={12} md={4}>            
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>G</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://github.com/Scoutan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="GitHub" secondary="My code repositories" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>V</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://www.vercel.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="Vercel" secondary="App deployments" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>H</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://www.heroku.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="Heroku" secondary="App deployments" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />                            
                        </List>
                    </Grid>
                    <Grid item sm={12} md={4}>            
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>W</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Windows" />
                            </ListItem>
                            <Divider variant="inset" component="li" /> 
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>L</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Linux" secondary="WSL / Ubuntu" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>M</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="MacOS" />
                            </ListItem>
                            <Divider variant="inset" component="li" />                                                      
                        </List>
                    </Grid>
                    <Grid item sm={12} md={4}>            
                        <List>                            
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>G</Avatar>
                                </ListItemAvatar>
                                <a
                                    href="https://workspace.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ListItemText primary="G Suite" secondary="Worked as a tech support" />
                                </a>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}