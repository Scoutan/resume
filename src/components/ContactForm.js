import React from 'react';
import HeaderBar from '../components/HeaderBar'
import {
    makeStyles,
    Button, 
    LinearProgress,
    Card, CardContent
} from '@material-ui/core'
import { Email } from '@material-ui/icons'
import { Formik, useField, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
    card: {
        textAlign: 'justify'
    }
}));

export default function ContactForm(props) {
    const classes = useStyles();

    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );        
    }

    const MyCheckbox = ({ children, ...props }) => {
        const [field, meta] = useField({ ...props, type: 'checkbox' });
        return (
            <div>
                <label className="checkbox-input">
                    <input type="checkbox" {...field} {...props} />
                    {children}
                </label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}                
            </div>
        );
    };

    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div>
                <label htmlFor={props.id || props.name}>{label}</label>
                <select {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        );
    };

    return (
        <Card className={classes.card} id={props.title}>
            <HeaderBar icon={<Email />} title={props.title} />      
            <CardContent>            
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        acceptedTerms: false,
                        jobType: ''
                    }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        acceptedTerms: Yup.boolean()
                            .required('Required')
                            .oneOf([true], 'You must accept the terms and conditions.'),
                        jobType: Yup.string()
                            .oneOf(
                                ['designer', 'development', 'product', 'other'],
                                'Invalid Job Type'
                            )
                            .required('Required')                    
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false)
                        }, 400);                
                    }}
                >
                    {({ submitForm, isSubmitting }) => (                
                    <Form>
                        <MyTextInput
                            component={<TextField />}
                            label="First Name"
                            name="firstName" 
                            type="text"
                            placeholder="Jane"
                        />
                        <br />
                        <MyTextInput
                            component={<TextField />}
                            label="Last Name"
                            name="lastName" 
                            type="text"
                            placeholder="Doe"
                        />
                        <br />
                        <MyTextInput
                            component={<TextField />}
                            label="Email Address"
                            name="email" 
                            type="email"
                            placeholder="jane@formik.com"
                        />
                        <br />
                        <MySelect label="Job Type" name="jobType">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="development">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </MySelect>
                        <br />
                        <MyCheckbox name="acceptedTerms">
                            I accept the terms and conditions
                        </MyCheckbox>                    
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
                    </Form>    
                    )}            
                </Formik>
            </CardContent>
        </Card>
    );
};