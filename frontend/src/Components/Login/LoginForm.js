import React from "react";
import {Formik} from "formik";

import {Button, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {btnStyle, errorStyle, link, loadingStyle, serverError, textFieldStyle} from "./LoginStyle";
import {validationSchema} from '../../validation/validation'


const LoginForm = (props) => {

    const login = (email, password) => {
        props.logIn(email, password);
    }

    return (
        <Formik initialValues={{email: '', password: ''}}
                validateOnBlur
                onSubmit={(values) => login(values.email, values.password)}
                validationSchema={validationSchema}
        >
            {({values, errors, touched,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty}) => (
                <div>
                    <TextField style={textFieldStyle}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Username'}
                               placeholder={'Enter username'}
                               name={'email'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.name}/>
                    {touched.email && errors.email && <p style={errorStyle}>{errors.email}</p>}

                    <TextField style={textFieldStyle}
                               variant={'filled'}
                               fullWidth
                               required
                               type="password"
                               label={'Password'}
                               placeholder={'Enter password'}
                               name={'password'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.name}/>
                    {touched.password && errors.password && <p style={errorStyle}>{errors.password}</p>}

                    {props.isFetching ?
                        <Grid align={'center'}>
                            <CircularProgress style={loadingStyle}/>
                        </Grid> :

                        <Button color='primary'
                                fullWidth
                                variant='contained'
                                style={btnStyle}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}>Login</Button>
                    }

                    <Typography>
                        <NavLink to={'/register'} style={link}>
                            Don't have an account?
                        </NavLink>
                    </Typography>

                    <h2 style={serverError}>{props.serverMessageLog}</h2>

                </div>
            )}
        </Formik>
    );
}

export default LoginForm;