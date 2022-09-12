import React from "react";
import {Navigate} from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Grid, Paper, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/Key';
import {accordionStyle, paperStyle} from "./SecretStyle";

const Secret = (props) => {

    if (props.loginStatus === false) return <Navigate to={'/'}/>

    if(props.loginStatus === true) {
        props.isSecretRouting(true);
    }

    const logout = () => {
        props.loginStatusChange(false);
        props.isSecretRouting(false);
    }


    return (
        <div>
            <Grid>
                <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>
                        <h2>Welcome, {props.email ? props.email : 'Stranger'}</h2>
                        <Accordion style={accordionStyle}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontFamily={'Helvetica'} textAlign={'center'}>You can now reveal my
                                    secret</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'Helvetica'}>
                                    I like Onyx
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Button onClick={logout} color='primary'
                                fullWidth
                                variant='contained'>LogOut</Button>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default Secret;