import React, {Component} from 'react';
import {Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {DatePicker} from "@material-ui/pickers";
import Divider from "presentations/Divider";

const country = ['Albania', 'Kosovo', 'Macedonia', 'Serbia', 'Montenegro']
const cities = ['Prishtina', 'Gjakova', 'Mitrovica', 'Ferizaj', 'Peja', 'Istog', 'Gjilan', 'Podujeva', 'Prizreni','Kacanik','Vushtri','Deqan','Shtime','Suhareke','Novoberde']


class PersonalInfo extends Component {


    render() {
        const {state ={},changed,handleDateChange} = this.props
        return (
            <div>
            <h2>Personal Info</h2>
            <Divider/>
            <Grid container spacing={2} direction="row" justify={"space-between"}>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label={'First Name'} variant="outlined"
                               name='firstName' onChange={changed} style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label={'Last Name'} variant="outlined"
                               name="lastName" onChange={changed} style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <DatePicker
                        fullWidth
                        disableFuture
                        openTo="year"
                        format="DD/MM/YYYY"
                        variant="inline"
                        inputVariant="outlined"
                        label="Date of birth"
                        views={["year", "month", "date"]}
                        value={state.birthDate}
                        autoOk
                        name="birthDate"
                        onChange={(date) => {
                            handleDateChange(date, 'birthDate')
                        }}
                    />
                </Grid>
            </Grid>

                <Grid container spacing={4} direction={"row"} justify={"space-between"} style={{marginTop: '50px'}}>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                        <Select fullWidth value={state.country}
                                name="country"
                                onChange={changed}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {country.map(element => {
                                return (
                                    <MenuItem value={element}>{element}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                        <Select fullWidth value={state.city}
                                name="city"
                                onChange={changed}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {cities.map(element => {
                                return (
                                    <MenuItem value={element}>{element}</MenuItem>
                                )
                            })}
                        </Select>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label={'Street'} variant="outlined" name="street"
                                   style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label={'ZipCode'} variant="outlined" name="zipCode"
                                   style={{width: '100%'}}/>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default PersonalInfo