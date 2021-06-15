import React from 'react';
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Button, 
    LinearProgress,
    Card, CardContent,
    Paper,
    Grid,
    Typography
} from '@material-ui/core'
import { Email } from '@material-ui/icons'
import { Formik, useField, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'inherit',
        color: '#C5C6C7',
        textAlign: 'center'
    },
    form: {
        backgroundColor: '#FFF',
        border: '1px solid white',
        width: '500px',
        padding: '10px 15px',
        margin: '0 auto',
    },
    input: {
        width: '300px',
        padding: '5px 10px',
        margin: '0 0 0 5px',
        border: 'none',
        borderBottom: '1px solid black'
    },
    textArea: {
        resize: 'none',
        width: '400px',
        height: '300px',
        padding: '12px 20px',
    },
    error: {
        color: 'red',
        padding: '0 0 0 5px'
    },
    submit: {
        width: '100%'
    }

}));

export default function ContactForm(props) {
    const classes = useStyles();

    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <Grid item >
                    <label htmlFor={props.id || props.name}>
                        <Typography variant="h6" align="left">
                            {label}
                            {meta.touched && meta.error ? (
                                <span className={classes.error}>
                                    {meta.error}
                                </span>
                            ) : null}
                        </Typography>
                    </label>
                    <input className={classes.input} {...field} {...props} />                    
                </Grid>
            </>
        );        
    }

    const MyTextArea = ({label, ...props}) => {
        const [field, meta] = useField(props);
        return (
            <>
                <Grid item>
                    <label htmlFor={props.id || props.name}>
                        <Typography variant="h6" align="left">
                            {label}
                            {meta.touched && meta.error ? (
                                <span className={classes.error}>
                                    {meta.error}
                                </span>
                            ) : null}
                        </Typography>
                    </label>
                    <textarea className={classes.textArea} {...field} {...props} />                    
                </Grid>
            </>
        );
      };

    return (
        <Card className={classes.card} id={props.title} elevation={0}>
            <HeaderBar icon={<Email fontSize="large" />} title={props.title} />      
            <CardContent>                
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('(Required)'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('(Required)'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('(Required)'),
                        message: Yup.string()
                            .min(1, 'Please enter your message')
                            .required('(Required)'),              
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false)
                        }, 1000);                
                    }}
                >
                    {({ submitForm, isSubmitting }) => (                        
                        <Form>
                            <Paper className={classes.form} elevation={3}>
                            <Grid container spacing={3} direction="column" justify="center" alignItems="flex-start" alignContent="center"> 
                                <MyTextInput
                                    component={<TextField />}
                                    label="First Name"
                                    name="firstName" 
                                    type="text"
                                    placeholder="Jane"
                                />
                                <MyTextInput
                                    component={<TextField />}
                                    label="Last Name"
                                    name="lastName" 
                                    type="text"
                                    placeholder="Doe"
                                />
                                <MyTextInput
                                    component={<TextField />}
                                    label="Email Address"
                                    name="email" 
                                    type="email"
                                    placeholder="jane@formik.com"
                                />
                                <MyTextArea
                                    component={<TextField />}
                                    label="Message"
                                    name="message"
                                    rows="6"
                                    placeholder="Message..."
                                />
                                <Grid item className={classes.submit}>
                                    {isSubmitting && <LinearProgress />}
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                            </Paper>
                        </Form>     
                    )}            
                </Formik>
            </CardContent>
        </Card>
    );
};