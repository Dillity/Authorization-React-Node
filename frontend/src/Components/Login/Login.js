import React from "react";
import {Navigate} from "react-router-dom";
import {Avatar, Grid, Paper} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LoginForm from "./LoginForm";
import {paperStyle, avatarStyle} from "./LoginStyle";

const Login = (props) => {
    return (
        props.loginStatus ? <Navigate to={'/secret'}/> :
            <Grid>
                <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                        <h1>Sign In</h1>
                    </Grid>
                   <LoginForm logIn={props.logIn} serverMessageLog={props.serverMessageLog} isFetching={props.isFetching}/>
                </Paper>
            </Grid>
    );
}

export default Login;