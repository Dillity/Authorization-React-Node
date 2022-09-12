import React from "react";
import RegistrationForm from "./RegistrationForm";
import {Avatar, Grid, Paper} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {paperStyle, avatarStyle} from "./RegistrationStyle";

const Registration = (props) => {
    return (
        <Grid>
            <Paper elevation={15} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h1>Sign Up</h1>
                </Grid>
                <RegistrationForm register={props.register} serverMessageReg={props.serverMessageReg} isFetching={props.isFetching}/>
            </Paper>
        </Grid>
    );
}

export default Registration;
