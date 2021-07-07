import React from 'react'
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Grid,
    Card, CardContent,
    Typography,
    List, ListItem, ListItemAvatar, ListItemText, Avatar,
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
    },
    gridWidth: {
        '@media (max-width:450px)': {
            flexGrow: '0',
            maxWidth: '100%',
            flexBasis: '100%',
        },
    },
    listBG: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: '20px'
    },
    links: {
        color: '#C5C6C7',
        textDecoration: 'none'
    },
    skillTitle: {
        color: "#66FCF1",
    },
    avatar: {
        objectFit: "contain"
    },
    desc: {
        color: 'white'
    }
}));

export default function Skills(props) {
    const classes = useStyles();

    const ListItemTemplate = (props) => {
        let avatar = '';

        if (props.src) {
            avatar = <Avatar alt={props.alt} src={props.src} variant="square" classes={{img: classes.avatar}} />
        } else {
            avatar = <Avatar classes={{img: classes.avatar}}>{props.alt.charAt(0)}</Avatar>
        }

        if (props.href) {
            return (
                <ListItem>
                    <ListItemAvatar>
                        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes.links}>
                            {avatar}
                        </a>
                    </ListItemAvatar>                                
                    <ListItemText>
                        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes.links}>
                            <Typography component="span" className={classes.skillTitle}>{props.title}</Typography>
                        </a>
                        <Typography className={classes.desc}>{props.desc}</Typography>
                    </ListItemText>                                
                </ListItem>
            )
        } else {
            return (
                <ListItem>
                    <ListItemAvatar>
                        {avatar}
                    </ListItemAvatar>                                
                    <ListItemText>
                        <Typography component="span" className={classes.skillTitle}>{props.title}</Typography>
                        <Typography className={classes.desc}>{props.desc}</Typography>
                    </ListItemText>                                
                </ListItem>
            )
        }
    }

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<DeveloperMode />} title={props.title} />      
            <CardContent>
                <Grid container spacing={3} alignItems="flex-start">
                    <Grid item xs={6} lg={3} className={classes.gridWidth}>            
                        <List className={classes.listBG}>
                            <ListItemTemplate alt="JavaScript" title="JavaScript" desc="" />                            
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="CSS3 logo" src="/CSS3-icon.svg" title="CSS3" desc="" />                            
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="PHP logo" src="/PHP-logo.svg" title="PHP" desc="" />
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="MySQL logo" src="/MySQL-logo.svg" title="MySQL" desc="" />
                        </List>
                    </Grid>
                    <Grid item xs={6} lg={3} className={classes.gridWidth}>            
                        <List className={classes.listBG}>
                            <ListItemTemplate alt="React logo" src="/React-icon.svg" title="React JS" desc="Front-end JavaScript library" />
                            <Divider variant="inset" component="li" />  
                            <ListItemTemplate href='https://nextjs.org/' alt="Next.js" src="/Nextjs-logo.svg" title="Next.js &#8594;" desc="React front-end web development framework" />                            
                            <Divider variant="inset" component="li" />  
                            <ListItemTemplate href='https://material-ui.com/' alt="Material UI logo" src="/mUI-icon.svg" title="Material-UI &#8594;" desc="React UI framework" />                            
                            <Divider variant="inset" component="li" />    
                            {/* <ListItemTemplate href="https://semantic-ui.com/" alt="Semantic UI logo" src="/sUI-icon.png" title="Semantic-UI &#8594;" desc="React UI framework" />
                            <Divider variant="inset" component="li" /> */}
                            <ListItemTemplate href="https://formik.org/" alt="Formik logo" src="/formik-logo.png" title="Formik &#8594;" desc="React form library" />
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate href="https://redux.js.org/" alt="Redux logo" src="/redux-logo.png" title="Redux &#8594;" desc="Application state management" />
                            <Divider variant="inset" component="li" />
                            {/* <ListItemTemplate href="https://redux-form.com/" alt="Redux Form logo" src="/RF-logo.png" title="Redux Form &#8594;" desc="Managing forms in Redux" />
                            <Divider variant="inset" component="li" /> */}
                            <ListItemTemplate href="https://cheerio.js.org/" alt="Cheerio JS" title="Cheerio JS &#8594;" desc="Markup parser" />
                            {/* <Divider variant="inset" component="li" />
                            <ListItemTemplate href="https://github.com/typicode/json-server" alt="JSON server" title="JSON server &#8594;" desc="Fake REST API for testing" /> */}
                        </List>
                    </Grid>                    
                    <Grid item xs={6} lg={3} className={classes.gridWidth}>            
                        <List className={classes.listBG}>
                            <ListItemTemplate href="https://git-scm.com/" alt="Git logo" src="/Git-logo.svg" title="Git &#8594;" desc="Software development collaboration" />
                            <Divider variant="inset" component="li" />
                            {/* <ListItemTemplate href="https://github.com/Scoutan" alt="GitHub logo" src="/GH-logo.svg" title="GitHub &#8594;" desc="My code repositories" />
                            <Divider variant="inset" component="li" /> */}
                            <ListItemTemplate href="https://www.vercel.com/" alt="Vercel logo" src="/vercel-logo.png" title="Vercel &#8594;" desc="App deployments & Next.js docs" />
                            <Divider variant="inset" component="li" />
                            {/* <ListItemTemplate href="https://www.heroku.com/" alt="Heroku logo" src="/Heroku-logo.svg" title="Heroku &#8594;" desc="App deployments" />
                            <Divider variant="inset" component="li" /> */}
                            <ListItemTemplate href="https://code.visualstudio.com/" alt="Visual Studio Code logo" src="/VSC-logo.svg" title="Visual Studio Code &#8594;" desc="Source-code editor" />                       
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate href="https://www.eclipse.org/" alt="Eclipse logo" src="/Eclipse-logo.svg" title="Eclipse &#8594;" desc="Integrated development environment" />                       
                        </List>
                    </Grid>
                    <Grid item xs={6} lg={3} className={classes.gridWidth}>            
                        <List className={classes.listBG}>
                            <ListItemTemplate alt="Windows logo" src="/Windows-logo.svg" title="Windows" desc="My computer OS" />
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="Android logo" src="/Android-logo.svg" title="Android OS" desc="My smartphone OS" />
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="Android-x86 logo" src="/Android-x86.png" title="Android-x86" desc="My Android OS playground on PC" />
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="Linux logo" src="/linux-logo.svg" title="Linux" desc="WSL / Ubuntu" />
                            <Divider variant="inset" component="li" />
                            <ListItemTemplate alt="MacOS logo" src="/MacOS-logo.svg" title="MacOS" desc="For compatibility testing" />
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}