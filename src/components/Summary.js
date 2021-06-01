import React from 'react'
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Card, CardContent,
    Typography
} from '@material-ui/core'
import {
    SortByAlpha
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center'
    }
}));

export default function Summary(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            {/* <HeaderBar icon={<SortByAlpha />} title={props.title} /> */}
            <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium augue, elementum aliquet leo. Integer lacinia metus metus, eu fermentum mi lobortis quis. Cras gravida eleifend libero quis pulvinar. Donec pharetra cursus velit semper aliquam. Ut elementum in libero lacinia suscipit. Cras at tellus sit amet mauris fringilla convallis et placerat velit. Vivamus ac dui et neque iaculis vehicula vitae vitae massa. Ut facilisis lacus sapien, nec rhoncus dolor bibendum a. Suspendisse rhoncus metus in velit mattis, at faucibus magna mollis.
                </Typography>
            </CardContent>
        </Card>
    )
}