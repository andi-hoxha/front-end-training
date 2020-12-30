import React, {Component} from "react";
import {Fab, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import {DatePicker} from "@material-ui/pickers";
import RemoveIcon from "@material-ui/icons/BackspaceRounded";
import PropTypes from 'prop-types'

const academicDegree = ['Bachelor', 'Master', 'PhD']
const uni = ['University of Prishtina UP', 'University of Prizren - Ukshin Hoti', 'University of Peja - Haxhi Zeka', 'University of Gjakova - Fehmi Agani', 'University of Gjilan - Kadri Zeka', 'University of Mitrovica - Isa Boletini', 'University of Applied Sciences in Ferizaj', 'University of Islamic studies']
const major = ['Faculty of Philosophy', 'Faculty of Mathematics', 'Faculty of Philology', 'Faculty of Law', 'Faculty of Economics', 'Faculty of Civil Engineering and Architecture',
    ' Faculty of Electrical and Computer Engineering', 'Faculty of Mechanical Engineering', 'Faculty of Medicine', 'Faculty of Arts', 'Faculty of Agriculture', 'Faculty of Sports Sciences',
    'Faculty of Education']

class Education extends Component {

    static get propTypes() {
        return {
            education: PropTypes.array.isRequired
        }
    }

    // static get defaultProps() {
    //     return {
    //         education: [{degree: '', university: '', major: '', startDate: Date.now(), endDate: Date.now()}],
    //     }


    constructor(props) {
        super(props);
    }

    render() {

        const {index = 0, education = []} = this.props
        const currentEducation = education[index] || {}

        let deleteButton = null;
        if (index !== 0) {
            deleteButton = (
                <Grid item xs={1}>
                    <Fab color="primary" aria-label="remove" onClick={this.props.deleteClick}>
                        <RemoveIcon fontSize={"default"}/>
                    </Fab>
                </Grid>
            )
        }

        return (
            <Grid container spacing={2} direction={"row"} justify={"space-between"}
                  style={{marginTop: '25px'}}>
                <Grid item xs={1}>
                    <InputLabel id="demo-simple-select-outlined-label">Degree</InputLabel>
                    <Select fullWidth value={currentEducation.degree}
                            name="degree"
                            onChange={(event) => {
                                this.props.testChange(event, index)
                            }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {academicDegree.map(element => {
                            return (
                                <MenuItem value={element}>{element}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
                <Grid item xs={3} style={{width: '100%'}}>
                    <InputLabel id="demo-simple-select-outlined-label">University</InputLabel>
                    <Select fullWidth value={currentEducation.university}
                            name="university"
                            onChange={(event) => {
                                this.props.testChange(event, index)
                            }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {uni.map(element => {
                            return (
                                <MenuItem value={element}>{element}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
                <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-outlined-label">Major</InputLabel>
                    <Select fullWidth value={currentEducation.major}
                            name="major"
                            onChange={(event) => {
                                this.props.testChange(event, index)
                            }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {major.map(element => {
                            return (
                                <MenuItem value={element}>{element}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
                <Grid item xs={2}>
                    <DatePicker
                        style={{width: '80%'}}
                        disableFuture
                        openTo="year"
                        format="DD/MM/YYYY"
                        variant="inline"
                        inputVariant="outlined"
                        label="Start Date"
                        views={["year", "month", "date"]}
                        value={currentEducation.startDate}
                        autoOk
                        onChange={(date) => {
                            this.props.testChange(date, index, 'startDate')
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <DatePicker
                        style={{width: '80%'}}
                        disableFuture
                        openTo="year"
                        format="DD/MM/YYYY"
                        variant="inline"
                        inputVariant="outlined"
                        label="End Date"
                        views={["year", "month", "date"]}
                        value={currentEducation.endDate}
                        autoOk
                        onChange={(date) => this.props.testChange(date, index, 'endDate')}
                    />
                </Grid>
                {deleteButton}
            </Grid>
        )
    }

}

export default Education



