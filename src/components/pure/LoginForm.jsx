import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const LoginForm = ({loged, fetching, onLogin}) => {
    const initialCredentials = {
        email:'',
        password:''
    };

    return (
        <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                    
                }}
            >
                { props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur

                    } = props;
                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="example@mail.com"
                                type="email"
                            />

                            {
                                errors.email && touched.email && 
                                (
                                <div>
                                    <p>{ errors.email}</p>
                                </div>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field 
                                id="password" 
                                name="password" 
                                placeholder="Password"
                                type="password"
                            />

                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component="div"></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {fetching ? (<p>LOADING...</p>): null }
                            {
                                isSubmitting ?
                                (
                                
                                <p>Login your credentials..</p>
                                
                                ) : null
                            }
                        </Form>
                    )
                }}
                
            </Formik>
    )
}

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm