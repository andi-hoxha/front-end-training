import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import {FormControl, Grid, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import PhoneIcon from "@material-ui/icons/Phone";

class ContactInfo extends Component{

    render() {
        const {changed} = this.props
        return (
            <div>
                <h2>Contact</h2>
                <Divider/>
                <Grid container spacing={1} direction={"row"} justify={"space-around"}>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name="email"
                                onChange={changed}
                                startAdornment={<InputAdornment position="start"><EmailIcon
                                    color={"primary"}/></InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Web</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name="web"
                                onChange={changed}
                                startAdornment={<InputAdornment position="start"><LanguageSharpIcon
                                    color={"primary"}/></InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name="phoneNumber"
                                onChange={changed}
                                startAdornment={<InputAdornment position="start"><PhoneIcon
                                    color={"primary"}/></InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ContactInfo