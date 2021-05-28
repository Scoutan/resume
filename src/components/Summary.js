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
        textAlign: 'justify'
    }
}));

export default function Summary() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <HeaderBar icon={<SortByAlpha />} title="Summary" />
            <CardContent>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet pretium augue, elementum aliquet leo. Integer lacinia metus metus, eu fermentum mi lobortis quis. Cras gravida eleifend libero quis pulvinar. Donec pharetra cursus velit semper aliquam. Ut elementum in libero lacinia suscipit. Cras at tellus sit amet mauris fringilla convallis et placerat velit. Vivamus ac dui et neque iaculis vehicula vitae vitae massa. Ut facilisis lacus sapien, nec rhoncus dolor bibendum a. Suspendisse rhoncus metus in velit mattis, at faucibus magna mollis. In nibh purus, sollicitudin nec nisi laoreet, lobortis sagittis ipsum. Donec est nisl, iaculis sed malesuada nec, dictum ut orci. Mauris ullamcorper, erat a dapibus sodales, ipsum sem facilisis arcu, vitae consequat orci quam et tellus.
                </Typography>
            </CardContent>
        </Card>
    )
}