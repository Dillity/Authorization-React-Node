import React from "react";
import {Formik} from "formik";
import {Button, CircularProgress, Grid, Link, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {link, textFieldStyle, errorStyle, btnStyle, serverError} from './RegistrationStyle'
import {validationSchema} from "../../validation/validation";
import {loadingStyle} from "../Login/LoginStyle";

const RegistrationForm = (props) => {

    const register = (email, password) => {
        props.register(email, password);
    }

    return (
        <Formik initialValues={{email: '', password: ''}}
                validateOnBlur
                onSubmit={(values) => register(values.email, values.password)}
                validationSchema={validationSchema}
        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty
              }) => (
                <div>
                    <TextField style={textFieldStyle}
                               fullWidth
                               variant={'filled'}
                               required
                               type={'text'}
                               label={'Username'}
                               placeholder={'Enter username'}
                               name={'email'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.name}/>
                    {touched.email && errors.email && <p style={errorStyle}>{errors.email}</p>}


                    <TextField style={textFieldStyle}
                               fullWidth
                               variant={'filled'}
                               required
                               type={'password'}
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
                                type={'submit'}>Sign Up</Button>
                    }

                    <Typography>
                        <NavLink to={'/'} style={link}>
                            Already registered? Login here.
                        </NavLink>
                    </Typography>

                    <h2 style={serverError}>{props.serverMessageReg}</h2>
                </div>
            )}
        </Formik>
    )
}

export default RegistrationForm;